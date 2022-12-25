const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = parseInt(input[0]);
const numArr = input.slice(1).map(el => el.split(',').map(Number));
const result = [];

for(let i = 0; i < T; i++){
    result.push(numArr[i][0] + numArr[i][1]);
}
console.log(result.join('\n'));