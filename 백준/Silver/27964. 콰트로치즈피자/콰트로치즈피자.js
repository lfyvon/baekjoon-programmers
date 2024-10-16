const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const set = new Set([...input[1].split(" ").filter(el => el.endsWith("Cheese"))]);
console.log(set.size >= 4 ? "yummy" : "sad");