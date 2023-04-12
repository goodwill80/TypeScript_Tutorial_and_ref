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

// **** Creating a generic function

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// Telling typescript that T and U can be any type but both T And U will be different
const merge = <T, U>(a: T, b: U) => {
  return Object.assign(a, b);
};

const mergeObjects = merge(
  { name: 'jon', hobbies: ['sports', 'art'] },
  { age: 70 }
);

// Generic, after declared in function, also offer flexibility of
// specifying then types later during calling of the function
const mergeObjects2 = merge<{ name: string }, { age: number }>(
  { name: 'Jim' },
  { age: 70 }
);
// Without generics above, we won't be able to log age as TypeScript can't reached into the individual object
console.log(mergeObjects.age);
