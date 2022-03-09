var Department = /** @class */ (function () {
    function Department(value) {
        this.name = value;
    }
    return Department;
}());
var Dept = new Department('Another Department');
console.log(Dept.name);
