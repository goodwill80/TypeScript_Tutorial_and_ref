"use strict";
// Interferance
// Once you have assigned a value to a variable, typescript will infer that it will be typecasted to
// the specific core type you have assigned.
// Typescript Core types
// Types:
// string
// number
// bolean
// object (very generic)
// Array
// Tuple
// Enum
// Any - most flexbile but not preferred as it removes all the advantages of typescript
// Example using non-inferrence
// const product: {
//   id: string;
//   price: number;
//   tags: string[]; Array
//   role: [string, number]; tuple
//   stores: any[]; Any
//   details: {
//     title: string;
//     description: string;
//   };
// } = {
//   id: 'abcl',
//   price: 12.99,
//   tags: ['great offer', 'hot and new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!',
//   },
// };
// console.log(product);
// NON-INFERENCE FORM - {} is a type of object in typescript - Actual form
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'jonathan',
//   age: 50,
// };
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHORE";
})(Role || (Role = {}));
// Inferrence form - Preferred form
const person = {
    name: 'jonathan',
    age: 50,
    hobbies: ['Sports', 'Cooking', 'Singing'],
    role: Role.ADMIN, // Enum
};
// Typescript overiding - with tuple type defined
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; // array of type string
//   role: [number, string]; // tuple of fixed length and fixed type array
// } = {
//   name: 'jonathan',
//   age: 50,
//   hobbies: ['Sports', 'Cooking', 'Singing'],
//   role: [2, 'author'],
// };
// Note: *push is allowed in tuple and override the fixed length restriction
// person.role.push('hello');
// while you can't do the below to override length of tuple
// person.role = [0, 'admin', 'hello'];
// Can only contain string items
let stringTypeActivities;
// Can contain a mixed of different types of items
let anyTypeActivities;
console.log(person.name);
// Due to typescript inference, we can loop through the array below
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
