// Inheritance, super constructor, overriding, protected, getters and setters
// Static method / properties
// Abstract classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    //Static method
    Department.createEmployees = function (name) {
        return { name: name };
    };
    // Methods
    Department.prototype.describe = function () {
        console.log("Department: ".concat(this.id, " ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log('The number of employees are ' + this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2023;
    return Department;
}());
// inherits from Department - You can only inherit one parent
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = _this.reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        // Getter
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            throw new Error('No report found!');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "recentReport", {
        // Setter
        set: function (value) {
            this.addReports(value);
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    // Override
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    // Methods
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department - ID: ".concat(this.id));
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
// Instantiation of classes
var it = new ITDepartment('d1', ['Max']);
it.addEmployee('Jonathan');
it.addEmployee('Oliver');
it.printEmployeeInformation();
// Using static method
var employee1 = Department.createEmployees('Jon');
console.log(employee1, Department.fiscalYear);
var accounts = new AccountingDepartment('d2', []);
// console.log(accounts.mostRecentReport); // Not parenthesis for getter and setter
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
