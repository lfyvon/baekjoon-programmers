const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const fibonacci = (n) => {
    let f1 = f2 = 1;
    let f3 = 0;
    for(let i = 3; i <= N; i++){
        f3 = (f1 + f2) % 1000000007;
        f1 = f2;
        f2 = f3;
    }
    return f3;
}
console.log(fibonacci(N), N - 2);