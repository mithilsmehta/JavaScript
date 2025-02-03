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
let numbers = [1, 5, 4, 3, 0];
findMin(numbers);
