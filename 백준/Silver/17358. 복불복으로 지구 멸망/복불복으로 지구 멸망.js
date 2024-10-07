const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 1;
for(let i = 1; i < N; i += 2){
    result = (result * i) % 1000000007;
}
console.log(result);