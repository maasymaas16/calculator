let num1 = 0;
let num2 = 0;
let operator = '';
let curr = '';

add = (num1, num2) => num1 + num2;
subtract = (num1, num2) => num1 - num2;
multiply = (num1, num2) => num1 * num2;
div = (num1, num2) => num1 / num2;

function operate(operator, num1, num2){
    if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1, num2);
    } else if (operator == '×'){
        return multiply (num1, num2);
    } else {
        return div (num1, num2);
    }
}

const display = document.querySelector('.display');
const number = document.querySelectorAll('.number');
number.forEach((num) => {
    num.addEventListener('click', function () {
        display.textContent += num.textContent;
    });
});

const oper = document.querySelectorAll('.operator');
oper.forEach((op) => {
    op.addEventListener('click', function () {
        display.textContent = op.textContent;
    });
});


const clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
    display.textContent = '0';
});

