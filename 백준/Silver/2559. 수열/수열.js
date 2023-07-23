const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const temper = input[1].split(' ').map(Number);
let sum = temper.slice(0, k).reduce((a, b) => a + b, 0);
let max = sum;
for(let i = k; i < n; i++){
    sum = sum - temper[i - k] + temper[i];
    max = Math.max(sum, max);
}
console.log(max);