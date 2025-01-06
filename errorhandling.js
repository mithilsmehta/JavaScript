/*function f1(){
    console.log("This is Function 1");
}

function f2(){
    console.log("This is Function 2")
}
f1();
f4();

function makeOrder(){
    console.log("Here is your Black coffee, Enjoy your Day")
}
try {
    makeOrder();
    processOrder();
} catch(error) {
    console.log("an error occured in your program")
}
finally{
    console.log("This block is execute. No matter what!");
}*/

var a =9;
if(a<10){
    throw new Error("This is Customizable Error.")
}
else{
    console.log("Working Fine!");
}