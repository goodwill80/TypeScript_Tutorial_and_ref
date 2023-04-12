// Typecasting - 2 ways to typecast
//  --- a. "<>" angle bracket
//  --- b. "as" keyword

// We need to typecast html elements as typecast does not have access to html and will typecasr by default
// the element to be HTMLElement | null
// -- ! means expression before this will never return null

// Method 1
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );

// Method 2
const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement;

userInputElement.value = 'hi, there!';
