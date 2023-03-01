const N = Number(require('fs').readFileSync('/dev/stdin').toString());
const f = new Array(N + 1).fill(0);
f[1] = f[2] = 1;
const fib = (n) => {
    for(let i = 3; i <= n; i++){
        f[i] = f[i - 1] + f[i -2];
    }
    return f[n];
}
console.log(fib(N) + " " + (N - 2));