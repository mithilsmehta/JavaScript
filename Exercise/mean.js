function mean(myArray){
    console.log(myArray); 
    console.log(myArray.length);
    // The addition of all numbers and divide by total numbers
    var sumOfAllNumbers = 0;
    for (let i = 0; i < myArray.length; i=i+1){
        sumOfAllNumbers += myArray[i];
    }
    console.log(sumOfAllNumbers);
    console.log("mean =", sumOfAllNumbers / myArray.length);
}




mean([3,2,4,1,5]);
mean([7,1,8,2,9,4,3,5,6,10]);
mean([5,5,5,5]);
