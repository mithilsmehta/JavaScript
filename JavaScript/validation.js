function validate(){
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var age = document.getElementById("age").value;

    if(uname.trim() == "" ||pass.trim() == ""|| age.trim() == "")
    {
        alert("Missing Credentials");
        return false;
    }
    else if(uname == "kaushal" && pass == "12345" && age>= 13)
    {
        alert("Sign-up Successfull")
        return true;
    }
    else if (age < 13)
    {
        alert("Under Age");
        return false;
    }
    else
    {
        alert("Wrong ID and Password");
        return false;
    }

}