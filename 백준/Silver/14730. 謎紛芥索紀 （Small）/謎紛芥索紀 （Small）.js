const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let result = 0;
for(let i = 1; i <= n; i++){
    const [c, k] = input[i].split(" ").map(Number);
    result += c * k;
}
console.log(result);