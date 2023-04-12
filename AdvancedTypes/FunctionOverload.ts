// Function overload

type Combinable3 = string | number;
type Numeric3 = number | boolean;

type Universal3 = Combinable3 & Numeric3;

// Function overloads
function addFn3(a: string, b: number): string;
function addFn3(a: string, b: string): string;
function addFn3(a: number, b: number): string;
function addFn3(a: Combinable3, b: Combinable3) {
  // Type Guard using typeof
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
// let result = addFn3('Jon', 'Oliver') as string;
// let result = addFn3('Jon', 'Oliver');
// result.split('');

// console.log(result);
