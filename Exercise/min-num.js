function findMin(arr) {
    if (arr.length === 0) {
        console.log("Array must not be Empty")
        return;
    }
    let i = 1;
    let min = arr[0];

    while (i < arr.length) {
        if (arr[i] < min) {
            min = arr[i];
        }
        i++;
    }
    console.log(min);
}
// let numbers = [1, 5, 4, 0, 3];
// findMin(numbers);

// index print krvanu value print krvani index ne return krvanu 
// findIndexOfMinValue
function findIndexOfMinValue(arr) {
        if (arr.length === 0) 
            return;

        let index = 0;
        let minIndex=0;
        let minValue = arr[0];

    
        while (index < arr.length){
            if (arr[index] < minValue){
                minValue = arr[index];
                minIndex = index;
            }
            index++;
        }
        console.log(`Min Index: ${minIndex}, Min Value: ${minValue}`);
        return minIndex;
}

let arr = [6,2,3,7,10,1,9];
let minIndex = findIndexOfMinValue(arr);




