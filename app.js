var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: ".concat(this.name));
    };
    return Department;
}());
// const accounting: Department = new Department('Accounting');
var accounting = new Department('Accounting');
accounting.describe();
