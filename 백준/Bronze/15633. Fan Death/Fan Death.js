const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = 0;
for(let i = 1; i <= N; i++){
    if(N % i === 0) result += i;
}
console.log(result * 5 - 24);