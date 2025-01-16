var regex = /\S+ users/
var str1 = "             $$##users phone number is 9876543210";

var output = regex.exec(str1);
console.log(output);
