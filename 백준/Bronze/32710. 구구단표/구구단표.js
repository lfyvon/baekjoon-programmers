const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = 0;
for(let i = 9; i > 0; i--){
    if(N / i > 9) break;
    if(N % i === 0){
        result = 1;
    }
}
console.log(result);