const N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 0n;
for(let i = 1n; i < N; i++){
    result += (N + 1n) * i;
}
console.log(result.toString());