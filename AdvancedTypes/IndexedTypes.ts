// Index types - a feature that allows us to create properties

// If you need to create an object but don't know its property name/key or property count
// all you know is the type of properties. Then you can use index type

// An example below, i defined the key as an index of type string, hence indicating no name
// on the other hand i define the value as a string
interface ErrorContainer {
  id: string;
  // With below, you can add as many properties to object that is type as ErrorContainer
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: 'a1',
  email: 'Not a valid email',
  phone: 'Not a valid phone',
  username: 'Must not be less than 10 characters',
  password: 'Must be alphanumeric',
};
