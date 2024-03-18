const [x, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = x;
for(let i = 1; i <= N; i++){
    result = (result % 2 === 0 ? result / 2 : 2 * result) ^ 6;
}
console.log(result);