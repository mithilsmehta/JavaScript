let regex = /^Welcome?/;
let str1 = "Welcome to the youtube channel. Welcome";
let output = regex.test(str1);
console.log(output);

let op = regex.exec(str1);
console.log(op);