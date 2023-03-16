const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const fib = Array(n + 1).fill(0n);
fib[1] = fib[2] = 1n;
for(let i = 3; i <= n; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib[n].toString());