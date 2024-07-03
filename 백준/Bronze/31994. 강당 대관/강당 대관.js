const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim().split(" ")).sort((a, b) => +b[1] - +a[1]);
console.log(input[0][0]);