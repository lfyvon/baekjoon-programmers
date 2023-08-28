const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const p = input[0];
const [x, y, r] = input[1];
console.log(p.indexOf(x) + 1);