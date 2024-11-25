const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let result = Infinity;
for(let i = 1; i <= N; i++){
    const [t, l] = input[i].split(" ").map(Number);
    result = Math.min(result, t + l);
}
console.log(result);