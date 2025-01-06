function makeOrder(coffee){
    return new Promise((resolve,reject)=>{
        console.log("Making request for a "+ coffee)
        if(coffee == "Black Coffee"){
            resolve("Here is your coffee, Have a nice Day")
        }
        else{
            reject("Sorry! we serve Black Coffee only.")
        }
    })
}

function processOrder(order){
    return new Promise((resolve, reject) => {
        console.log("Processing order")
        resolve("Extra Information "+ order)
    })
}

/*makeOrder("Latte Coffee").then(order =>{
    console.log("Order has been recieved")
    return  processOrder(order) 
}).then(processOrder=>{
    console.log(processOrder)
}).catch(error =>{
    console.log(error);
})*/

async function func1() {  
    var order = await makeOrder("Black coffee ")
    console.log("Order has been received")
    var processedOrder = await processOrder(order)
    console.log(processedOrder)
}
func1();