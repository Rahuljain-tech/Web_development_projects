function validate(){

    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    console.log(username+ email)
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password, cpassword)
}
function checkusername(username){

    if(username.length > 7 )
    {
        document.getElementById('username').classList.replace("success")

    }
    else{
        document.getElementById('username').classList.replace("error")
    }
}