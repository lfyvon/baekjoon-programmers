const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const cor = input.slice(1).map(el => el.split(" ").map(Number)).sort((a, b) => a[1] - b[1]);
console.log(cor[0].join(" "));
