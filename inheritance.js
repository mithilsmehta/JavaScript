/*const Employee ={
post : function(){
    return "A software Engineer";
},
changeName: function(Name){
    this.Name = Name;
}
};

var E1= Object.create(Employee);
E1.Name ="Kaushal";
E1.role ="Writer";

var E1= Object.create(Employee,{
Name :{value:"Kaushal2", writable: true},
role :{value:"Programmer"},
})
E1.changeName ("Ram");
console.log(E1);




function Employee(name,id,salary){
    this.name = name;
    this.id =id;
    this.salary =salary;
}

Employee.prototype.post=function(){
    return (this.name + " " + "is a content creator");
}
var Kaushal = new Employee("kaushal",3433,10000);
console.log(Kaushal);

function Programmer (name,id,salary,language){
    Employee.call(this,name,id,salary);
    this.language = language;
}
Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;
var Arun = new Programmer("Arun",4422,20000,"Javascript")
console.log(Arun);*/