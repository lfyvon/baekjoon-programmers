const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let result = 1;

for(let i = 2; i <= n; i++){
    result *= i;
}

console.log(result);