// Spread Operator on Arrays and Objects
const hobbies: string[] = ['Sports', 'Cooking'];

const activeHobbies: string[] = ['Hiking'];

activeHobbies.push(...hobbies);

const friend: {
  firstname: string;
  age: number;
} = {
  firstname: 'Max',
  age: 30,
};

const copiedFriend = { ...friend };

// Rest Params using array - ...numbers will be merged to an array
const addTheRest = (...numbers: number[]) => {
  return numbers.reduce((a, b) => a + b, 0);
};

console.log(addTheRest(1, 2, 3, 4, 5, 6, 7));

// Rest Params using Tuple - fixed array
const addTheRest2 = (...numbers: [number, number, number]) => {
  return numbers.reduce((a, b) => a + b, 0);
};

console.log(addTheRest2(1, 2, 3));

// Destructuring of Arrays - elements are pulled out in ordered fashion and needs to be in order
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// Destructuring of Objects - elements are pulled out via index or key names
// However, we can overide the key names
const { firstname: userName, age } = friend;
console.log(userName, age);
