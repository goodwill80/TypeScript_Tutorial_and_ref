// Inheritance, super constructor, overriding, protected, getters and setters
// Static method / properties
// Abstract classes
// Singleton Constructor / Private Constructor

abstract class Department {
  static fiscalYear: number = 2023;
  protected employees: string[] = [];
  constructor(protected readonly id: string, private name: string) {}

  //Static method
  static createEmployees(name: string): { name: string } {
    return { name: name };
  }

  // Abstract Method - also need to add an abstract in front of the class
  abstract describe(this: Department): void;

  // Methods
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log('The number of employees are ' + this.employees.length);
    console.log(this.employees);
  }
}

// inherits from Department - You can only inherit one parent
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  // Implement abstract method from parent
  describe(): void {
    console.log('IT Department - ID: ' + this.id);
  }
}

// Enforece a signleton class - Only 1 object can be instantiated
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  private lastReport: string;
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = this.reports[0];
  }

  // Static method to get instance for singleton
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  // Getter
  get mostRecentReport(): string {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found!');
  }

  // Setter
  set recentReport(value: string) {
    this.addReports(value);
  }

  // Methods
  addReports(text: string): void {
    this.reports.push(text);
    this.lastReport = text;
  }

  // Override
  addEmployee(name: string): void {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  // implement abstract method from parent
  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  printReports(): void {
    console.log(this.reports);
  }
}

// Instantiation of classes
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Jonathan');
it.addEmployee('Oliver');
it.printEmployeeInformation();

// Using static method
const employee1 = Department.createEmployees('Jon');
console.log(employee1, Department.fiscalYear);

// const accounts = new AccountingDepartment('d2', []);
const accounts = AccountingDepartment.getInstance();
console.log(accounts.mostRecentReport); // Not parenthesis for getter and setter
accounts.addReports('Imbalance report');
console.log(accounts.mostRecentReport); // Not parenthesis for getter and setter
accounts.addReports('Incident report');
console.log(accounts.mostRecentReport); // Not parenthesis for getter and setter
// Using the setter
accounts.recentReport = 'added report';
console.log(accounts.mostRecentReport); // Not parenthesis for getter and setter
accounts.addEmployee('Max');
accounts.addEmployee('Tim');
accounts.printEmployeeInformation();
accounts.printReports();
accounts.describe();
