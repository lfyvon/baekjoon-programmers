let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x => parseInt(x));

let n = input[0];
let k = input[1];
let result = factorial(n)/(factorial(k)*factorial(n-k));

function factorial(n) {
    if (n === 0){
        return 1;
    }
    return (n != 1) ? n * factorial(n - 1) : 1;
  }

console.log(result);