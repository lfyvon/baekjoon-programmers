const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => BigInt(el));

let money = n / m;
let left = n % m;

console.log(money +'\n'+ left);