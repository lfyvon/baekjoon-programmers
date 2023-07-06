const [x, y, z] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(x + y <= z ? 1 : 0);