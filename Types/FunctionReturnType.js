"use strict";
// Defining the return type of functions
const add = (n1, n2) => {
    return n1 + n2;
};
const printResult = (num) => {
    console.log('Result: ' + num);
};
printResult(add(5, 11));
console.log(printResult(add(5, 11)));
