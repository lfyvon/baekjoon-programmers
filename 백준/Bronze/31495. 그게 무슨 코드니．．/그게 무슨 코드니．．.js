const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const len = input.length;
console.log(input.length > 2 && input[0] === '"' && input[len - 1] === '"' ? input.slice(1, len - 1) : "CE");