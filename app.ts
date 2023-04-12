// Generics - Flexible and reusable code
// This does not exist in JS

const names: Array<string> = []; // string[]
// By having the generic type, we can now do the following without error
// names[0].split(' ');

// Promise is a generic
// const promise: Promise<Unknown>
const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

// Creating a generic function

function merge(objA: object, objB: object): object {
  return Object.assign(objA, objB);
}
