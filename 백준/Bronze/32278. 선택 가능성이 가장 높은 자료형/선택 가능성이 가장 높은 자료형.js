let N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
if(N < 0n) N = N * -1n - 1n;
console.log(N <= 32767n ? "short" : N <= 2147483647 ? "int" : "long long");