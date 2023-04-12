// **** 1. What is Generics
// Generics - Flexible, Type safety and reusable code
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

// **** 2. Creating a generic function

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// Telling typescript that T and U can be any type and both T And U will be different
// Hence, we are passing in extra information to make the params for versatile
// and for typescript to work in a optimal way
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
// console.log(mergeObjects.age);

// *** 3. Working with contraints - i.e. we want to restrict the type of T and U
// *** using extends keyword to force the type
const mergeContraints = <T extends object, U extends object>(a: T, b: U) => {
  return Object.assign(a, b);
};

// *** 4. Another creation of generic function - using custom interface and extending it
interface lengthy {
  length: number;
}
// Notice how we extend the interface to the generic and also type the return to be a tuple
const countAndDescribe = <T extends lengthy>(element: T): [T, string] => {
  let description = 'got no value';
  if (element.length === 1) {
    description = `Got 1 elements.`;
  } else if (element.length > 1) {
    description = `Got ${element.length} elements.`;
  }
  return [element, description];
};

// console.log(countAndDescribe(['sports', 'cooking']));

// *** 5. keyof Constraint - notice U extends keyof T (which is an obj)
const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return 'Value: ' + obj[key];
};

// console.log(extractAndConvert({ name: 'Max' }, 'name'));
