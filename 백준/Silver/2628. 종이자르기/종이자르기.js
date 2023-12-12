const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [row, col] = input[0].split(" ").map(Number);
const N = Number(input[1]);
const dotList = input.slice(2).map(el => el.split(" ").map(Number));
let rowArr = [0, row];
let colArr = [0, col];
let maxRow = 0;
let maxCol = 0;
for(let i = 0; i < N; i++){
    if(!dotList[i][0]) colArr.push(dotList[i][1]);
    else rowArr.push(dotList[i][1]);
}

rowArr = rowArr.sort((a, b) => a - b);
colArr = colArr.sort((a, b) => a - b);

for(let i = 0; i < rowArr.length - 1; i++){
    maxRow = Math.max(maxRow, rowArr[i + 1] - rowArr[i]);
}

for(let i = 0; i < colArr.length - 1; i++){
    maxCol = Math.max(maxCol, colArr[i + 1] - colArr[i]);
}

console.log(maxRow * maxCol);