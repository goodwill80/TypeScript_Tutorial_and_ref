// Example 1
// Without stating access modifier such as "private", the properties are default to "public"
// Note - access modifiers in typescript does not exists in javascript

class Departmentt {
  // See constructor for short form initialization of properties with access modifier
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  // Constructor
  // note: short form for declaring properties - only in constructor
  // "readonlyy" modifier does not change after initialized - for type-safety
  constructor(private readonly id: string, private name: string) {
    // this.name = n;
  }

  // Methods
  describe() {
    console.log(`Department: ${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log('The number of employees are ' + this.employees.length);
    console.log(this.employees);
  }
}

// const accounting: Departmentt = new Department('Accounting');
const accounting = new Departmentt('abcd', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('jon');
accounting.printEmployeeInformation();

accounting.describe();

// Example 2
class Product {
  private isListed: boolean;

  constructor(public title: string, public price: number) {
    this.isListed = true;
  }
}
