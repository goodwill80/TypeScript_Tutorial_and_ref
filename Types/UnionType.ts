//Union Type

const combine = (input1: number | string, input2: number | string) => {
  let result;
  // You'll still need to diferentiate the action, as typescript won't be able to tell what combination
  // the union is
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
