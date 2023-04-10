// Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Applying intersection 1
// Alternatively, you can use interfaces
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'jonathan',
  privileges: ['create-server'],
  startDate: new Date(),
};

// Applying intersection 2
type combinables = string | number;
type numeric = number | boolean;

type universal = combinables & numeric;


