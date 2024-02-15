const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 0;
for(let i = 1; i <= N; i *= 10){
    result += N - i + 1;
}
console.log(result);