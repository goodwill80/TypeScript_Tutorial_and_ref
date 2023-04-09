"use strict";
// Callback function
// Note - even if the cb is set to return void, it can still return something
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
addAndHandle(10, 20, (result) => {
    console.log(result);
    return true;
});
