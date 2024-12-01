const date = require('fs').readFileSync('/dev/stdin').toString().trim().split('-').join("");
console.log(date <= '20230916' ? 'GOOD' : 'TOO LATE');