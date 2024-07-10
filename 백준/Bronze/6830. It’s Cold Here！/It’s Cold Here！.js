const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim().split(" "));
console.log(input.sort((a, b) => +a[1] - +b[1])[0][0]);