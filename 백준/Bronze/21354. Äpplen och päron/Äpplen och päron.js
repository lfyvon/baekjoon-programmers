const [a, p] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(a * 7 === p * 13 ? "lika" : a * 7 > p * 13 ? "Axel" : "Petra");