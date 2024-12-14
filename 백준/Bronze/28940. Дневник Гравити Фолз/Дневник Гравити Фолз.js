const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [w, h] = input[0].split(" ").map(Number);
const [n, a, b] = input[1].split(" ").map(Number);
let count = Math.floor(w / a) * Math.floor(h / b);
console.log(count === 0 ? -1 : Math.ceil(n / count))