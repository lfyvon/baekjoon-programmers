const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [row, col] = input[0].split(" ").map(Number);
const N = Number(input[1]);
const dotList = input.slice(2).map(el => el.split(" ").map(Number));
let rowArr = [0, row];
let colArr = [0, col];
let max = 0;
for(let i = 0; i < N; i++){
    if(!dotList[i][0]) colArr.push(dotList[i][1]);
    else rowArr.push(dotList[i][1]);
}

rowArr = rowArr.sort((a, b) => b - a);
colArr = colArr.sort((a, b) => b - a);

for(let i = 0; i < rowArr.length - 1; i++){
    for(let j = 0; j < colArr.length - 1; j++){
        max = Math.max(max, (rowArr[i + 1] - rowArr[i]) * (colArr[j + 1] - colArr[j]));
    }
}
console.log(max);