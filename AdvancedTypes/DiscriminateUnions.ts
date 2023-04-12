// Discriminated Unions - another form of typeguard

interface Bird {
  type: 'bird'; // discriminate
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // discriminate
  runningSpeed: number;
}

type Animal = Bird | Horse;

// Note - instanceof will not work with Interfaces
const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
    default:
      return;
  }
  console.log('Moving at speed at ' + speed);
};

const parrot: Animal = {
  type: 'bird',
  flyingSpeed: 180,
};

moveAnimal(parrot);
