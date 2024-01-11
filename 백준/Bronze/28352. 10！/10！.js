const N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
let res = 1;
for(let i = 11; i <= N; i++){
    res *= i;
}
console.log(6 * res);