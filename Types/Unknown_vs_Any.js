"use strict";
// Unknown Type
// We don't know yet what the user will enter, hence it can be assign
// with any type. Unknown is more restrictive than any
let userInput;
let username;
// A less restrictive would be any
// let userInput: any;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    username = userInput;
}
