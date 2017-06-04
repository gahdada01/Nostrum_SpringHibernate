$( document ).ready(function() {

    check();

    $( window ).resize(function() {
        check();
    });

});

$( "#header-nav" ).click(function() {
    if ( $('#nav-clicked').is(':visible') ) {
        $('#nav-clicked').css('display','none');
        $('#header-nav i').addClass('fa-bars');
        $('#header-nav i').removeClass('fa-times');
    }
    else {
        $('#nav-clicked').css('display','block');
        $('#header-nav i').removeClass('fa-bars');
        $('#header-nav i').addClass('fa-times');
    }
});

function check() {

    if ($( window ).width() < 680){
        $('#header-body').css('background-image','linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,0.2)), url("resources/assets/img/header-body-background.jpg")', 'linear-gradient(rgba(255,255,255,.5)', 'rgba(255,255,255,.5)');
        $('#header-body').css('background-position','center center');
        $('#header-body').css('background-size','cover');
        $('#header-body').css('background-repeat','no-repeat');
    }
    else {
        $("#header-body").css('background-image', 'none');

        if ( $('#nav-clicked').is(':visible') ) {
            $('#nav-clicked').css('display','none');
        }

        $('#header-nav i').addClass('fa-bars');
        $('#header-nav i').removeClass('fa-times');
    }
}

$('#search-box input').focus(function(){
    $(this).attr("placeholder", "");
});

$('#search-box input').blur(function(){
    $(this).attr("placeholder", "Search");
});

$('#username').focus(function() {
    $(this).attr("placeholder", "");
});

$('#username').blur(function() {
	$(this).attr("placeholder", "Username");
});

$('#email').focus(function() {
    $(this).attr("placeholder", "");
});

$('#email').blur(function() {
	$(this).attr("placeholder", "Email");
});


$('#backToMain').click(function (){
    window.location.href = "http://localhost:8080/main";
});

$('#cancelEdit').click(function (){
    window.location.href = "http://localhost:8080/view";
});

$('#tab-left').click(function (){
    if ($('#tab-left').css('background','#f9b046')){
        $('#tab-left').css('background','#263856');
        $('#tab-right').css('background','#f9b046');

    }
    else if( $('#tab-left').css('background','#263856') ){
        $('#tab-left').css('background','#f9b046');
        $('#tab-right').css('background','263856');
    }
});

$('#tab-right').click(function (){
    if ($('#tab-right').css('background','#f9b046')){
        $('#tab-right').css('background','#263856');
        $('#tab-left').css('background','#f9b046');
    }
    else if( $('#tab-right').css('background','#263856') ){
        $('#tab-right').css('background','#f9b046');
        $('#tab-left').css('background','#263856');

    }
});


var formData = $('#bc-right-input');

$('#bc-right-input #bc-right-button').click(function (e){
    e.preventDefault();

    $.ajax({
        type: 'post',
        url : '/createJson',
        dataType: 'json',
        data:formData.serialize(),
        success: function (response) {

            if ( response.type === "error") {
                $('#errorDisplay #errorMessage').empty();
                $("#email").css('background-color', '#fff');
                $("#username").css('background-color', '#fff');

                $.each(response, function(index, data){

                    var update;

                    if (data.username){
                        $("#username").focus();
                        $('#errorDisplay #errorMessage').append(data.username);
                        $("#username").css('background-color', '#ffa1a1');
                        displayMessage();

                        update = setTimeout(removeMessage, 5000);

                        //break
                        return false;
                    }
                    else if(data.email){
                        $("#email").focus();
                        $('#errorDisplay #errorMessage').append(data.email);
                        $("#email").css('background-color', '#ffa1a1');
                        displayMessage();

                        update = setTimeout(removeMessage, 5000);

                        //break
                        return false;
                    }
                });
            }
            else {
                // console.log(response.type);
                // window.location.href = "http://localhost:8080/thankyou";

                $("#username").css("display", "none");
                $("#email").css("display", "none");
                $("#bc-right-button").css("display", "none");
                $("#tab-right").css("display", "none");
                $("#tab-left").css("display", "none");


                $('#bc-right').css('vertical-align','top');
                $('#bc-right').css('height','190px');
                $('#bc-right').css('margin-top','22px');
                $('#bc-right').css('margin-top','22px');
                $('#bc-right').append('<h1 id="thankYou">Thank You!</h1>');

                $('#thankYou').css('color','#fff');
                $('#thankYou').css('font-size','50px');
                $('#thankYou').css('padding-top','49px');

            }
        },
        error: function () {
            $('#errorDisplay #errorMessage').append("Connection Error");
            displayMessage();
        },
    });

});

function displayMessage() {
    $('#errorDisplay').css("display", "block");
    $('#errorDisplay').css("opacity", "1");
    $('#errorDisplay').css("position", "fixed");
}

function removeMessage() {
    $('#errorDisplay').css("opacity", "0");
    $('#errorDisplay').css("display", "none");
    $('#errorDisplay').css("position", "inherit");
}

