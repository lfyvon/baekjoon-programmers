const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [P, Q] = input[0].split(" ").map(Number);
const [A, B] = input[1].split(" ").map(Number);
console.log(Q > P ? P * A + (Q - P) * B : Q * A);