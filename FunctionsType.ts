// Type casting on functions
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

// This tells typescript that whatever we store in combinedValues has to be a function
// let combinedValues: Function;

// To further typecast the return type of a typed function, we specify the following
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(50, 50));
