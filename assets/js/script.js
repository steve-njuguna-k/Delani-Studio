$(document).ready(function(){
    $(".service-description-1, .service-description-2, .service-description-3, .service-description-4, .service-description-5, .service-description-6, .service-description-7, .service-description-8, .service-description-9").hide();
    //Services Toggle
    $("#service-1").click(function(){
        $(".service-description-1").slideToggle("slow");
    });
    $("#service-2").click(function(){
        $(".service-description-2").slideToggle("slow");
    });
    $("#service-3").click(function(){
        $(".service-description-3").slideToggle("slow");
    });
    $("#service-4").click(function(){
        $(".service-description-4").slideToggle("slow");
    });
    $("#service-5").click(function(){
        $(".service-description-5").slideToggle("slow");
    });
    $("#service-6").click(function(){
        $(".service-description-6").slideToggle("slow");
    });
    $("#service-7").click(function(){
        $(".service-description-7").slideToggle("slow");
    });
    $("#service-8").click(function(){
        $(".service-description-8").slideToggle("slow");
    });
    $("#service-9").click(function(){
        $(".service-description-9").slideToggle("slow");
    });
});

let form = document.getElementById("formSubmit").addEventListener("click", function(e){
    e.preventDefault();
});

function sendMessage(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if(name == '' || email == '' || subject == '' || message == ''){
        alert("Please Fill In ALL The Fields!");
    }
    else{
        alert("Thank you " + name + " for your inquiry." + "\n" + "DevCORE has received your message. Thank you for reaching out to us.");
    }

    document.getElementById("contact-form").reset();
}