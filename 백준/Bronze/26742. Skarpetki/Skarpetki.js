const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const countB = input.split("B").length - 1;
const countC = input.length - countB;
console.log(Math.floor(countB / 2) + Math.floor(countC / 2));