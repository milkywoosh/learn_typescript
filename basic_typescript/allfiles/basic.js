"use strict";
const button = document.querySelector('button');
const input1 = document.getElementById('first');
const input2 = document.getElementById('second');
function addTrial(num1, num2) {
    return +num1 + +num2;
}
button.addEventListener('click', () => {
    console.log(addTrial(+input1.value, +input2.value));
});
