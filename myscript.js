let num1 = '';
let num2 = '';
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
        if (operator == ''){
            num1+=num.textContent;
            display.textContent = num1;
        } else {
            num2 += num.textContent;
            display.textContent = num2;
        }
    });
});

const oper = document.querySelectorAll('.operator');
oper.forEach((op) => {
    op.addEventListener('click', function () {
        if (operator == '') {
        operator = op.textContent;
        } else if (operator == '+'){
            display.textContent = add(parseInt(num1), parseInt(num2));
        } else if (operator == '-'){
            display.textContent = subtract(parseInt(num1), parseInt(num2));
        } else if (operator == '×'){
            display.textContent = multiply(parseInt(num1), parseInt(num2));
        } else {
            display.textContent = div(parseInt(num1), parseInt(num2));
        }  
    });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
    display.textContent = '0';
    num1 = '';
    num2 = '';
});

