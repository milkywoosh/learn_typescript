function addition(n1: number, n2: number): boolean {
    return n1 > n2
}


console.log(addition(12, 12))


// TYPE ASSIGNMENT AND TYPE INFERENCE
const x: number = 1;
const y: number = 2;
const z: string = 'testing';

// UNDERSTANDING OBJECT IN Typescript
// --> define person as an 'object' or {key: string, key: nujber}!
const person: {
    name: string,
    age: number
} = {
    name: 'ben',
    age: 10,
}
console.log(person.name)
console.log(person)


const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

console.log(product)

function AdditionNumber(n1: number, n2: number): void {
    console.log(n1+n2)
}
console.log(AdditionNumber(10,40));

let passingFunction = AdditionNumber
console.log(passingFunction(40,70))


