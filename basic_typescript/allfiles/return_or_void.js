"use strict";
// RETURN SOMETHING
function addNumber(n1, n2) {
    return n1 + n2;
}
// NO RETURN or VOID
function printResult(num) {
    console.log("resturn: ", num);
}
printResult(10);
function getArray(arr1, n) {
    let modArr = [];
    for (let i = 0; i < arr1.length; i++) {
        modArr.push(arr1[i] * n);
    }
    return modArr;
}
console.log(getArray([1, 2, 3], 2));
