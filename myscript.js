let numRows = 3;
let numCols = 3;
let totalNums = 9;

const container = document.querySelector('.container');

for (let i = 0; i < numRows; i++){
    const row = document.createElement('div');
    row.classList.add('row')
    grid.appendChild(row);
    for (let j = 0; j < numCols; j++){
        const btn = document.createElement('button');
        div.classList.add('box');
        row.appendChild(div);
    }
}