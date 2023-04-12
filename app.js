// Generics - Flexible and reusable code
// This does not exist in JS
var names = []; // string[]
// By having the generic type, we can now do the following without error
// names[0].split(' ');
// Promise is a generic
// const promise: Promise<Unknown>
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
    }, 2000);
});
// **** Creating a generic function
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// Telling typescript that T and U can be any type but both T And U will be different
var merge = function (a, b) {
    return Object.assign(a, b);
};
var mergeObjects = merge({ name: 'jon', hobbies: ['sports', 'art'] }, { age: 70 });
// Without generics above, we won't be able to log age as TypeScript can't reached into the individual object
console.log(mergeObjects.age);
