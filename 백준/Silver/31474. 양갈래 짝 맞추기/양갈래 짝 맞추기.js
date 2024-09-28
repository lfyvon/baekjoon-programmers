const N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 1n;
for(let i = 1n; i <= N; i++){
    if(i % 2n) result *= i;
}
console.log(result.toString());