

jQuery(document).ready(function(){
    jQuery("#btn-sign-up").on("click", async function(){
        var isValid = true
        let firstName = jQuery("#first-name")
        
        let lastName = jQuery("#last-name")
        let email = jQuery("#email")
        let reEmail = jQuery("#re-email")
        let password = jQuery("#password")
        let rePassword = jQuery("#re-password")
        let accept = jQuery('input[name="accept"]')
        console.log(accept.val())
        regexBlank = /\S+/
        regexEmail = /^[a-zA-Z0-9.+-_%]+@[a-zA-Z0-9.-]+\.+[a-zA-Z]{2,}$/
        if(isValid){
            if(!regexBlank.test(firstName.val())){
                isValid = false
                jQuery("#first-name-required").removeClass("d-none")
            }else{
                jQuery("#first-name-required").addClass("d-none")
            }
        } if(isValid){
            if(!regexBlank.test(lastName.val())){
                isValid = false
                jQuery("#last-name-required").removeClass("d-none")
            }else{
                jQuery("#last-name-required").addClass("d-none")
            }
        } if(isValid){
            if(!regexEmail.test(email.val())){
                isValid = false
                jQuery("#email-required").removeClass("d-none")
            }else{
                jQuery("#email-required").addClass("d-none")
            }
        } if(isValid){
            if(email.val()!=reEmail.val()){
                isValid = false
                jQuery("#re-email-required").removeClass("d-none")
            }else{
                jQuery("#re-email-required").addClass("d-none")
            }
        } if(isValid){
            if(!regexBlank.test(password.val())){
                isValid = false
                jQuery("#password-required").removeClass("d-none")
            }else{
                jQuery("#password-required").addClass("d-none")
            }
        } if(isValid){
            if(password.val()!=rePassword.val()){
                isValid = false
                jQuery("#re-password-required").removeClass("d-none")
            }else{
                jQuery("#re-password-required").addClass("d-none")
            }
        }
        if(isValid){
            if(!accept.is(":checked")){
                isValid = false
                jQuery("#accept-required").removeClass("d-none")
            }else{
                console.log("checked")
                jQuery("#accept-required").addClass("d-none")
            }
        }
        if(isValid){
            let jsonObject = {
                "fullName":firstName.val()+lastName.val(),
                "email":email.val(),
                "password":password.val()
            }
            await writeJson(jsonObject)
            await bootbox.alert("Register success!")
            forward("user-information.html")
        }
    })
})
// assets/json/user.json
const filePath = "assets/json/user.txt"
async function writeJson(jsonObject){
    var data = localStorage.getItem("user-list")
    var jsonData = []
    if(data!=""&&data!=null){
        jsonData = JSON.parse(data)
    }
    console.log(jsonObject)
    console.log(jsonData)
    jsonData.push(jsonObject)
    const updateData = JSON.stringify(jsonData)
    localStorage.setItem("user-list",updateData)
    // Tạo một mảng JSON rỗng
}
function forward(filename){
    setTimeout(function(){
        window.location.href=filename
    },1000)
}