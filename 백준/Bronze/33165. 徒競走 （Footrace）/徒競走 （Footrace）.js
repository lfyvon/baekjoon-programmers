const [T, V] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(T * V);