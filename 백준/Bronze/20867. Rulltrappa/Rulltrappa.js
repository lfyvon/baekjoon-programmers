const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [M, S, G] = input[0];
const [A, B] = input[1];
const [L, R] = input[2];
const lLine = L / A + Math.ceil(M / G);
const rLine = R / B + Math.ceil(M / S);
console.log(lLine > rLine ? "latmask" : "friskus");