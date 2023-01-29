const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').sort((a, b) => a - b);
console.log(a === b && b === c ? 2 : a ** 2 + b ** 2 === c ** 2 ? 1 : 0);