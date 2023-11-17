account ={
    "email":"nguyenvana@gmail.com",
    "password":12345
}

jQuery(document).ready(function(){
    jQuery("#btn-sign-up").on("click",function(){
    const email = jQuery("#email")
    const emailAlert = jQuery("#email-required")
    const password = jQuery("#password")
    const passwordAlert = jQuery("#password-required")
    const signInAlert = jQuery("#sign-up-required")
    var emailIsValid = false
    var passwordIsValid = false
    if(email.val()==""||email.val()==null){
        emailAlert.text("Please enter email.")
    }else{
        emailIsValid = true
        emailAlert.text("")
    }

    // valid password
    
    if(password.val()==null||password.val()==""){
        passwordAlert.text("Please enter password.")
    }else{
        passwordIsValid = true
        passwordAlert.text("")
    }
    if(emailIsValid&&passwordIsValid){
        if(account.email==email.val()&&account.password==password.val()){
            bootbox.alert("Login success.")
            forward()
           
        }else{
            bootbox.alert("Email or password incorrect.")
        }
    }

    })
function forward(){
    setTimeout(function(){
        window.location.href="index.html"
    },3000)
}
    
})