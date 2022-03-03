const button = document.querySelector('button');
const input1 = document.getElementById('first')! as HTMLInputElement;
const input2 = document.getElementById('second')! as HTMLInputElement;

function add(num1: number, num2: number): number {
    return +num1 + +num2;
}

button.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value))
});



