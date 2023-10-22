const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(arr.sort((a, b) => a - b).join("\n"));