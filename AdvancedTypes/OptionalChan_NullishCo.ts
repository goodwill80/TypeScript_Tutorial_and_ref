// Optional Chaining ? - avoid runtime error

const fetchUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};

// console.log(fetchUserData?.job?.title);

// Nullish Coalescing -
const userInputs = null;
// if this is null or undefined and NOT "" then we'll use the fallback of default
const storedData = userInputs ?? 'DEFAULT';
console.log(storedData);
