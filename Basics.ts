// Core types of typescript - number, string, boolean
// Exaple of definine params in a function
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  //   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //     throw new Error('incorrect input!');
  //   }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
};

let number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
// variables with no assignments
let resultPhrase2: string;
let number: number;

const result = add(number1, number2, printResult, resultPhrase);
