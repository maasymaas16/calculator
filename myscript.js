let numRows = 3;
let numCols = 3;
let totalNums = 9;

const container = document.querySelector('.container');

const calculator = document.createElement('div');
calculator.classList.add('calc');
const display = document.createElement('div');
display.classList.add('display');

container.appendChild(calculator);
calculator.appendChild(display);

for (let i = 0; i < numRows; i++){
    const row = document.createElement('div');
    row.classList.add('row'+i)
    calculator.appendChild(row)
    for (let j = 0; j < numCols; j++){
        const btn = document.createElement('button');
        btn.classList.add('box');
        btn.textContent = totalNums-2+j;
        row.appendChild(btn);
    }
    totalNums = totalNums - 3;
}
const bottomRow = document.createElement('div');
bottomRow.classList.add('bottom');

const zero = document.createElement('button');
zero.classList.add('box');
zero.textContent = '0';

const decimal = document.createElement('button');
decimal.classList.add('box');
decimal.textContent = '.';

const equal = document.createElement('button');
equal.classList.add('box', 'equal');
equal.textContent = '=';

bottomRow.appendChild(decimal);
bottomRow.appendChild(zero);
bottomRow.appendChild(equal);
calculator.appendChild(bottomRow);

const plus = document.createElement('button');
plus.classList.add('box', 'plus');
plus.textContent = '+';

const minus = document.createElement('button');
minus.classList.add('box', 'minus');
minus.textContent = '-';

const mult = document.createElement('button');
mult.classList.add('box', 'mult');
mult.textContent = "×";


const divide = document.createElement('button');
divide.classList.add('box', 'divide');
divide.textContent='÷';


document.querySelector('.row0').appendChild(divide);
document.querySelector('.row1').appendChild(mult);
document.querySelector('.row2').appendChild(minus);
bottomRow.appendChild(plus);

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('click', function () {
        display.textContent += box.textContent;
    });
});

const equals = document.querySelector('.equal');
equals.addEventListener('click', function () {
    display.textContent = '';

});

