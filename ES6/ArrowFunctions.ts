const addNumbers = (a: number, b: number): number => a + b;

// const printOutputNums = (output: string | number): void => console.log(output);
// Typecasting of an arrow function
const printOutputNums: (a: number | string) => void = (output) =>
  console.log(output);

printOutputNums(addNumbers(10, 30));
