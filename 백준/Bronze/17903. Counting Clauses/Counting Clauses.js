const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [m, n] = input[0].split(" ").map(Number);
console.log(m >= 8 ? "satisfactory" : "unsatisfactory");