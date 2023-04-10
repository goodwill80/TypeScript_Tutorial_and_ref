// Interface
// As a Contract - interface implemented to classes for enforcement of methods as well as type-checking
// As a structure of an Object - It can also use to describe the structure of an object

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

// A. USING Interface to define the structure of an object in place of "type"
// Polymophism - we can typecast an boject based on implementation of an interface along with its methods and fields
// No arrow function in an object literal
let user1: Person;
user1 = {
  name: 'Jonathan',
  age: 70,
  greet: function (phrase: string) {
    console.log(phrase);
  },
};
user1.greet('Hello, how are you? My name is jon!');
// Alternatibe of using type against interface
// type person = {
//   name: string;
//   age: number;
//   greet: (ph: string) => void;
// };

// B. USING Interface as a contract to a class
interface Greetable {
  name: string;
  greet(phase: string): void;
}

class People implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  // Override from interface
  greet(ph: string): void {
    console.log(ph + ' ' + this.name);
  }
}

// Polymorphism
let user2: Greetable;
user2 = new People('Jim');
user2.greet('Hello there!');

// C. We cannot add access modifiers on interface properties but we can add readonly
interface Greetable3 {
  readonly name: string; // cannot be changed once initialised
  greet(phrase: string): void;
}

// D. Interface can also inherit from another interface
// You can extends more than 1 interfaces unlike classes where you can only extend 1 class
interface Named {
  readonly name: string;
}

interface Greetable3 extends Named {
  greet(phrase: string): void;
}

class Person2 implements Greetable3 {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(ph: string): void {
    console.log('Hello, my name is ' + this.name + '. ' + ph);
  }
}

let friend1: Person2;

friend1 = new Person2('Joanna');
friend1.greet('How are you?');

// E. Interface can also define the structure of a function
// we can also use type
type addFunc = (a: number, b: number) => number;
let addition: addFunc;
addition = (a: number, b: number): number => a + b;

// Using Interface - we simply define an anonlymous function
interface addFn {
  (a: number, b: number): number;
}

let addition2: addFn;
addition2 = (a: number, b: number): number => a + b;
console.log(addition2(100, 100));

// F. Adding optional properties to interfaces using ?
interface Named2 {
  readonly name?: string;
  outputName?: string;
}

// There is no error with ommission of outputName
// using Optional parameter ?
class Person3 implements Named2 {
  name?: string;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
}

let friend2: Person3;
friend2 = new Person3();
