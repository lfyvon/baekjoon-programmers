const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(el => parseInt(el));
const numArr = input[1].split(' ').map(el => parseInt(el));
let sumArr = new Array(n + 1).fill(0);
let result = [];

for(let i = 1; i <= n; i++){
    sumArr[i] = sumArr[i - 1] + numArr[i - 1];
}

for(let i = 2; i < m + 2; i++){
    let [start, end] = input[i].split(' ').map(el => parseInt(el));
    result.push(sumArr[end] - sumArr[start - 1]);
}

console.log(result.join('\n'));