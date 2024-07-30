const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const con = input[1].split(" ").map(Number).reduce((a, b) => a + b ** 3, 0);
console.log(Math.cbrt(con, 3));