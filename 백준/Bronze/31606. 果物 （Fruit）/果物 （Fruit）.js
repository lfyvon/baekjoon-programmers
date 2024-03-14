const [X, Y] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(X + Y + 3);