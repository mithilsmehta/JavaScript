let regrex = /welc?ome?/;
let str1 = "Welbome to the youtube channel.  back";
let output = regrex.test(str1);
console.log(output);

let op = regrex.exec(str1);
console.log(op);