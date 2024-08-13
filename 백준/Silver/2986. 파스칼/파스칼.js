const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let c = 1;
for(let i = 2; i * i <= N; i++){
    if(N % i === 0){
        c = N / i;
        break;
    }
}
console.log(N - c);