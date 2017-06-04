package com.up.skill.controllers;

import com.up.skill.models.Form;
import com.up.skill.models.FormInterface;
import com.up.skill.support.web.MessageHelper;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.Printer;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.PrintWriter;
import java.io.Writer;
import java.security.Principal;
import java.util.List;

/**
 * Created by Multi Cabz on 9/21/2016.
 */
@Controller
public class Main {

    @Autowired
    private FormInterface formInterface;

    @RequestMapping(value = "/main", method = RequestMethod.GET)
    public String index(){
        return "main/index";
    }

    @RequestMapping(value = "/thankyou")
    public String thanks() { return "main/thankyou"; }

//    @RequestMapping(value = "/thankyou", method = RequestMethod.POST)
//    public String form(Form form, RedirectAttributes ra) {
//        formInterface.save(form);
//        return "main/thankyou";
//    }

    @RequestMapping(value = "/createJson", method = RequestMethod.POST)
    public void loadJsonForm(@ModelAttribute @Valid Form form,
                               BindingResult bindingResult,
                               HttpServletResponse response,
                               HttpServletRequest request ){
        try {
            PrintWriter out = response.getWriter();

            JSONObject object = new JSONObject();
            JSONObject errorMessage = new JSONObject();

            if(!bindingResult.hasErrors()){
                String email = request.getParameter("email");
                Form formEmail = formInterface.findByEmail(email);

                String username = request.getParameter("username");
                Form formUsername = formInterface.findByUsername(username);

                if(formUsername == null){

                    if(formEmail == null){
                        formInterface.save(form);
                        object.put("type", "success");
                    }else{
                        errorMessage.put("email","Your email already exist!");
                        object.put("errorMessages", errorMessage);
                        object.put("type","error");
                    }
                }else{
                    errorMessage.put("email","Your username already exist!");
                    object.put("errorMessages", errorMessage);
                    object.put("type","error");
                }

            }else{
                object.put("type","error");
                List<FieldError> errors = bindingResult.getFieldErrors();

                for(FieldError result : errors){
                    errorMessage.put(result.getField(),result.getDefaultMessage());
                }
                object.put("errorMessages", errorMessage);
            }

            out.print(object);

        } catch (Exception ex) {
            System.out.print(ex);
        }
    }


    @RequestMapping(value = "/view", method = RequestMethod.GET)
    public String view(Model model){

        model.addAttribute("users", formInterface.findAll());
        return "main/view";
    }

    @RequestMapping ("/delete/{id}")
    public String doDelete(@PathVariable Long id,
                           RedirectAttributes ra){
        formInterface.delete(id);

//        MessageHelper.addSuccessAttribute(ra, "form.deleted");

        return "redirect:/view";
    }

    @RequestMapping("/edit/{id}")
    public String edit(@PathVariable Long id, Model model){
        model.addAttribute("user",formInterface.findOne(id));
        return "main/edit";
    }

    @RequestMapping (value = "/save", method = RequestMethod.POST)
    public String save(@RequestParam Long id,
                           @RequestParam String usernameEdit,
                           @RequestParam String emailEdit,
                           RedirectAttributes ra) {

        Form myForm = formInterface.findOne(id);

        myForm.setUsername(usernameEdit);
        myForm.setEmail(emailEdit);

        formInterface.save(myForm);

//        MessageHelper.addSuccessAttribute(ra, "form.updated");

        return "redirect:/view";
    }
}
