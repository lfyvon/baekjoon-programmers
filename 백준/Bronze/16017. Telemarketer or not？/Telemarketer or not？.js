const [a, b, c, d] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(b === c && (a === 8 || a === 9) && (d === 8 || d === 9) ? 'ignore' : 'answer');