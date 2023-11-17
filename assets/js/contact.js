jQuery(document).ready(function(){
    jQuery("#btn-submit").on("click",function(){
        var fullName = jQuery("#name")
        var fullNameAlert = jQuery("#name-required")
        var email = jQuery("#email")
        var emailAlert = jQuery("#email-required")
        var subject = jQuery("#subject")
        var subjectAlert = jQuery("#subject-required")

        var message = jQuery("#message")
        var messageAlert = jQuery("#message-required")
        var fullNameIsValid = false
        var emailIsValid = false
        var subjectIsValid = false
        var messageIsValid = false
        // check full name
        if(fullName.val().trim()!=""){
            fullNameIsValid = true
            fullNameAlert.text("")
        }else{
            fullNameAlert.text("Please enter full name.")
        }
        // check email
        if(email.val()!=""&&email.val()!=null){
            if(/^[a-zA-Z0-9.+]+@[a-zA-Z0-9.-]+\.+[a-zA-Z]{2,}$/.test(email.val())){
                emailIsValid= true
                emailAlert.text("")
            }else{
                emailAlert.text("Email format incorrect.")
            }
        }else{
            emailAlert.text("Please enter email.")
        }
        // check subject
        if(subject.val().trim()!=""){
            subjectIsValid = true
            subjectAlert.text("")
        }else{
            subjectAlert.text("Please enter subject.")
        }
        // check message
        if(message.val().trim()!=""){
            messageIsValid = true
            messageAlert.text("")
        }else{
            messageAlert.text("Please enter message.")
        }
        if(fullName&&emailIsValid&&subjectIsValid&&messageIsValid){
            bootbox.alert("Thanks you was submit form contact.")
        }

    })
})
