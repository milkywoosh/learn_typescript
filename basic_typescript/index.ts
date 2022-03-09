class Department {
    // field of a class
    name: string;

    constructor(value: string) {
        this.name = value;
    }
}

const Dept = new Department('Another Department');
console.log(Dept.name)

