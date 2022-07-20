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
const button = document.querySelectorAll('.btn');
button.forEach((btn) => {
    btn.addEventListener('click', function () {
        display.textContent = btn.textContent;
    });
});


const clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
    display.textContent = '0';
});

