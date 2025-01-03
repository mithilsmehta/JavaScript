/*console.log("Welcome to JS");

var abc ={
    Name: "Kaushal",
    Age: "20",
    City: "Ahmedabad"
}

console.log(abc);*/

function xyz(name,subject,Address)
{
    this.name = name;
    this.Address = Address;
    this.subject = subject;
}
xyz.prototype.getname = function(){
    return this.name;
}
xyz.prototype.getaddress = function(){
    return this.Address;
}
xyz.prototype.getsubject = function(){
    return this.subject;
}
xyz.prototype.grades ="A";
var x1 = new xyz("Kaushal","Java","Earth");
var x2 = new xyz("Raj","English","Mumbai");
console.log(x1);