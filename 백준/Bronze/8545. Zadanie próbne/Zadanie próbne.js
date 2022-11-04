const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let result = input.reverse();
console.log(result.join(''));