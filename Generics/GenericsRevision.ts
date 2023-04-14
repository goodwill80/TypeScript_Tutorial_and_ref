// More on Generics

const createArray = <T>(arr: T[]): T[] => {
  return [...arr];
};

const createStringArr = createArray<string>(['I', 'am', 'Jon']);
console.log(createStringArr);

const createNumArr = createArray<number>([1, 2, 3, 4, 5]);
createNumArr.push(100);
console.log(createNumArr);
