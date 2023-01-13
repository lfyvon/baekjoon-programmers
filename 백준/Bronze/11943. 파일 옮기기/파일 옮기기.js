const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const [C, D] = input[1].split(' ').map(Number);

A + D > B + C ? console.log(B + C) : console.log(A + D);