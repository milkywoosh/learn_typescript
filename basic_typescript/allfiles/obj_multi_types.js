"use strict";
let data_obj = {
    name: 'john',
    age: 10,
    assets: {
        car: 'ferrari',
        gold: 100
    },
    nationality: ['ind', 'eng'],
};
let emptyObj;
function edit_nationality(obj) {
    if (!obj) {
        return false;
    }
    return obj;
}
data_obj = Object.assign(Object.assign({}, data_obj), { age: 12, assets: Object.assign(Object.assign({}, data_obj.assets), { car: 'lambo', gold: 500 }) });
// console.log(data_obj);
let result = edit_nationality(emptyObj);
let result1 = edit_nationality(data_obj);
console.log(result);
console.log(result1);
function fetchData(data) {
    console.log(data);
}
const infoData = {
    name: "ben",
    cars: ["ferrari", "lambo"]
};
fetchData(infoData);
