// TypeGuards i.e. typeof, instanceof, '' in obj

// Type Guards - Ex 1: using typeof
type Combinable2 = string | number;
type Numeric2 = number | boolean;

type Universal2 = Combinable2 & Numeric2;

const addFn = (a: Universal2, b: Combinable2) => {
  // Type Guard using typeof
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
};

// console.log(addFn(100, 99));

// Type Guards - Ex 2: using "in"
type Administation = {
  name: string;
  privileges: string[];
};

type Staff = {
  name: string;
  startDate: Date;
};

// using intersection
type SeniorManagement = Administation & Staff;

type UnknownEmployee = Administation | Staff;

// Since type UnknownEmployee may or may not contain privileges, typescript will throw an error if there is no
// conditional type gurards. We cannot use typeof Employee === "Object" as it does not tell us anything about its
// variable. We also cannot check if typeof employee === "Staff" as custom type is not regconised in JS
// Therefore, we use the following guard type to structure our function
const printEmployeeInformation = (employee: UnknownEmployee): void => {
  console.log(`Name: ${employee.name}`);
  if ('privileges' in employee) {
    console.log(`Privileges: ${employee.privileges}`);
  }
  if ('startDate' in employee) {
    console.log(`Start Date: ${employee.startDate}`);
  }
};

const ceo: UnknownEmployee = {
  name: 'Jon',
  privileges: ['Enjoy life', 'Walk around freely'],
  // startDate: new Date(),
};

// printEmployeeInformation(ceo);

// Type Guards - Ex 3: with classes
class Car {
  drive(): void {
    console.log('Driving...');
  }
}
class Truck {
  drive(): void {
    console.log('Driving...');
  }
  loadCargo(amount: number): void {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1: Vehicle = new Car();
const v2: Vehicle = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  // We can use instanceof as another form of type guard
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10);
  }
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(10);
  // }
};

useVehicle(v1);
useVehicle(v2);
