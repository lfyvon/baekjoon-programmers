const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const r = n / 3 - 2;
let result = 0;
for(let i = 1; i <= r; i++){
    result += i;
}
console.log(result);