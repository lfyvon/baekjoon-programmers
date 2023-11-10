const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(input[1].split(" ").sort((a, b) => +a - +b).join(" "));