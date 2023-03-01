const N = Number(require('fs').readFileSync('/dev/stdin').toString());
const f = new Array(N + 1).fill(0);
f[1] = f[2] = 1;

const fib = (n) => {
    if(n === 1 || n === 2){
        return 1;
    } else{
        return (fib(n - 1) + fib(n - 2));
    }
}

console.log(fib(N) + " " + (N - 2));