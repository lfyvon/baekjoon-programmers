const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const stdNum = 3;
const sum = new Array(stdNum).fill(0);
const sqrt = new Array(stdNum).fill(0);
for(let i = 1; i <= N; i++){
    const score = input[i].split(" ").map(Number);
    for(let j = 0; j < stdNum; j++){
        sum[j] += score[j];
        sqrt[j] += score[j] ** 2;
    }
}
const max = Math.max(...sqrt);
const maxIdx = [...sqrt].indexOf(max);
let count = sqrt.filter(el => el === max).length;
console.log(`${count > 1 ? 0 : maxIdx + 1} ${sum[maxIdx]}`);