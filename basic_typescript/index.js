function addition(n1, n2) {
    return n1 > n2;
}
console.log(addition(12, 12));
// TYPE ASSIGNMENT AND TYPE INFERENCE
var x = 1;
var y = 2;
var z = 'testing';
// UNDERSTANDING OBJECT IN Typescript
// --> define person as an 'object' or {key: string, key: nujber}!
var person = {
    name: 'ben',
    age: 10
};
console.log(person.name);
console.log(person);
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(product);
function AdditionNumber(n1, n2) {
    console.log(n1 + n2);
}
console.log(AdditionNumber(10, 40));
var passingFunction = AdditionNumber;
console.log(passingFunction(40, 70));
// MUST DELETE LATER
function AdditionTest(n1, n2) {
    console.log(n1 + n2);
}
var combineValues;
combineValues = AdditionTest(10, 30);
