/*function one() {
          setTimeout(function(){
         console.log("Function 1");
          two();
        },3000)
    
    }

one();

function two(){
    console.log("Function 2");
}*/

function person(friend,person2)
{
    setTimeout(function(){
    console.log("My Friend's Name is "+ friend);
    person2();},3000);
}
function person2(){
    console.log("My Name is Kaushal");
}

person("Simplicode", person2);



