const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [L, P] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const num = L * P;
const result = arr.map(el => el - num);
console.log(result.join(' '));