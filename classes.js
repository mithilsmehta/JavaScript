class student {
    constructor (name,age,roll){
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    org (){
        return("I am "+ this.name +" from JS");
    }
    dob(){
        return("The Date of birth of"+this.name+"is"+(2020-this.age));
    }
    static add(a,b){
        return a+b;
    }
}

class student1 extends student{
constructor(name,age,roll,language,section){
    super(name,age,roll);
    this.language = language;
    this.section = section;
}
}
var Arun = new student1("Aarya",20,21,"English","c");
console.log(Arun);
console.log(student1.add(65,8))


/*var kaushal = new student("kaushal",22,25);
console.log(kaushal);
console.log(student.add(10,40));*/