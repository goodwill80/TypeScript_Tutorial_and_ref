// Type Aliases / Custom Types
// Creating your own type cast combinations

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
};

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

// Other examples of custom /aliase types
type User = { name: string; age: number };
const u1: User = { name: 'jon', age: 60 };

const greet = (user: User) => {
  console.log('Hi, I am ' + user.name);
};

const isOlder = (user: User, checckAge: number) => {
  return checckAge > user.age;
};
