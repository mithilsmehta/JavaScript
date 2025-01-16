function validate ()
{
    var email = document.getElementById("mail").value;
    var regex = /^([a-z A-Z 0-9\. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z A-Z]{2,6})?$/

    if (email.trim()=="")
    {
        alert("Please a enter a valid Email Id")
    }
    else if ((regex.test(email)))
    {
        alert("Email Submitted Successfully")
    }
    else
    {
        alert("Wrong Email Id");
    }
}
