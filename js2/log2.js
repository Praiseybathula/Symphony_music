function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username==password)
    {
        alert("login failed..!Enter a strong password");
        return false;
    }
    else{
        alert("login successfull..!");
    }
}