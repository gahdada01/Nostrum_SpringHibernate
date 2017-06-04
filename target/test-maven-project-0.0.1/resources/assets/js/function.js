$( document ).ready(function() {
    console.log( "ready!" );

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

    // var windowSize = $( window ).width();

    if ($( window ).width() < 688){
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
    }
}

$('#search-box input').focus(function(){
    $(this).attr("placeholder", "");
});

$('#search-box input').blur(function(){
    $(this).attr("placeholder", "Search");
});

$('#username').focus(function() {
	// $(this).attr("placeholder", "").val("").focus().blur();
    $(this).attr("placeholder", "");
});

$('#username').blur(function() {
	$(this).attr("placeholder", "Adipiscing");
});

$('#email').focus(function() {
	// $(this).attr("placeholder", "").val("").focus().blur();
    $(this).attr("placeholder", "");
});

$('#email').blur(function() {
	$(this).attr("placeholder", "Ex ea commodi");
});

// $('#bc-right-input #button').click(function (e){
//     e.preventDefault();
//
//     //window.location.href = "http://localhost:8080/register";
//
//     // var formData = $('#bc-right-input');
//     //
//     // $.ajax({
//     //     type: "POST",
//     //     url: "/post",
//     //     dataType: "json",
//     //     data: formData.serialize(),
//     //     success: function(response) {
//     //
//     //         console.log(response);
//     //
//     //         if (response.message == "error") {
//     //             if (response.field == "firstname") {
//     //                 console.log(response.field);
//     //             }
//     //             else {
//     //                 console.log(response.field);
//     //             }
//     //         }
//     //         //
//     //         // $('#bc-right-input').hide('');
//     //         // $('#bc-right #button').hide('');
//     //         // $('#bc-right #tab').hide('');
//     //         //
//     //         // $.each(response, function(key, value) {
//     //         //     displayResponse.push(value);
//     //         // });
//     //         //
//     //         // $('#bc-right').append('<div style="font-size: 50px; color: white;"> Thank you '+displayResponse[0]+' '+displayResponse[1]+'</div>');
//     //
//     //     },
//     //     error: function(response) {
//     //         alert("Error Connecting to Server");
//     //         console.log(response);
//     //     },
//     // });
// });

$('#backToMain').click(function (){
    window.location.href = "http://localhost:8080/main";
});

$('#cancelEdit').click(function (){
    alert("cancel");
    window.location.href = "http://localhost:8080/view";
});

$('#bc-right-input #button').click(function (){

    alert("working");
    // $.ajax({
    //     type: "POST",
    //     url: "/post",
    //     dataType: "json",
    //     data: formData.serialize(),
    //     success: function(response) {
    //
    //         console.log(response);
    //
    //     },
    //     error: function(response) {
    //         alert("Error Connecting to Server");
    //         console.log(response);
    //     },
    // });
});