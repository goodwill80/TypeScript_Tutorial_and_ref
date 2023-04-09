"use strict";
// Type Aliases / Custom Types
// Creating your own type cast combinations
// Main objective and use case of Aliases type is reusability
const combine = (input1, input2, resultConversion) => {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
const u1 = { name: 'jon', age: 60 };
const greet = (user) => {
    console.log('Hi, I am ' + user.name);
};
const isOlder = (user, checckAge) => {
    return checckAge > user.age;
};
