/*function start(){
    setTimeout(function(){
        alert("welcome back!");
    },2000)
}*/

var id = 0;
var message = () => alert("Welcome to JavaScript");
function start(){
   id = setInterval(message,5000);
}

function stop(){
    clearTimeout(id);
}