const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const fibo = new Array(n + 1).fill(0);
fibo[1] = 1;
for(let i = 2; i <= n; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo[n]);