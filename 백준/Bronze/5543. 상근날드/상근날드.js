const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));

let burger = input.slice(0, 3);
let beverage = input.slice(3);
let result = Math.min(...burger) + Math.min(...beverage) - 50;
console.log(result);