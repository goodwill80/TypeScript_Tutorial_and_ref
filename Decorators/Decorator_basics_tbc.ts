// *** Decorators are used for Meta-Programming
// *** a decorator is a function - it needs to have an argument

// // Decorator funtion
// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }

// Decorator Factory
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object....');
  }
}

const pers = new Person();

// console.log(pers);

// ** Decorator
