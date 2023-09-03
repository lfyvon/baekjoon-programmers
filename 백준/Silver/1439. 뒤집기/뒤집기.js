const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const ones = input.split('0').filter(el => el !== '');
const zeros = input.split('1').filter(el => el !== '');
console.log(Math.min(ones.length, zeros.length));