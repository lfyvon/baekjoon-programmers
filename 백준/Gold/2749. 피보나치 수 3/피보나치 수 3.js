const n = BigInt(require('fs').readFileSync('/dev/stdin').toString());
const p = 1500000;
const re = 1000000;
const fib = Array(p + 1).fill(0);
fib[1] = fib[2] = 1;
for(let i = 3; i <= p; i++){
    fib[i] = (fib[i - 1] + fib[i - 2]) % re;
}
console.log(fib[Number(n % BigInt(p))]);