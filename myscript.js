let numRows = 3;
let numCols = 3;
let totalNums = 9;

const container = document.querySelector('.container');

// const buttonOne = document.createElement('button');
// buttonOne.classList.add('box');
// buttonOne.textContent = '1';
// container.appendChild(buttonOne);

for (let i = 0; i < numRows; i++){
    const row = document.createElement('div');
    row.classList.add('row'+i)
    container.appendChild(row)
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
zero.classList.add('zero');
zero.textContent = '0';

const equal = document.createElement('button');
equal.classList.add('box');
equal.textContent = '=';

bottomRow.appendChild(zero);
bottomRow.appendChild(equal);
container.appendChild(bottomRow);

const plus = document.createElement('button');
plus.classList.add('box');
plus.textContent = '+';

const minus = document.createElement('button');
minus.classList.add('box');
minus.textContent = '-';

const mult = document.createElement('button');
mult.classList.add('box', 'mult');
mult.textContent = "x";


const divide = document.createElement('button');
divide.classList.add('box', 'divide');
divide.textContent='÷';


document.querySelector('.row0').appendChild(divide);
document.querySelector('.row1').appendChild(mult);
document.querySelector('.row2').appendChild(minus);
bottomRow.appendChild(plus)