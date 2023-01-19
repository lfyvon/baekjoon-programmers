const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = 0;
if(N % 2 === 0){
    result = N / 2 % 2 === 1 ? 1 : 2;
}
console.log(result);