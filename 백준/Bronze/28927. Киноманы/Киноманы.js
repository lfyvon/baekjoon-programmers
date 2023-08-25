const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [t1, e1, f1] = input[0];
const [t2, e2, f2] = input[1];
const max = t1 * 3 + e1 * 20 + f1 * 120;
const mel = t2 * 3 + e2 * 20 + f2 * 120;
console.log(max === mel ? "Draw" : max > mel ? "Max" : "Mel");