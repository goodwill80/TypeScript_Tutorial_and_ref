// Defining the return type of functions

const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log('Result: ' + num);
};

printResult(add(5, 11));
console.log(printResult(add(5, 11)));
