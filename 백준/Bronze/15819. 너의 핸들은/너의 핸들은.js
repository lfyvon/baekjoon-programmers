const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, I] = input[0].split(" ").map(Number);
const id = input.slice(1).map(el => el.trim()).sort();
console.log(id[I - 1]);