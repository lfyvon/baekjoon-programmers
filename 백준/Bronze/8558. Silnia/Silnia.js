const n = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = 1;
for(let i = 2; i <= n; i++){
    result = (result * i) % 10;
}
console.log(result);