const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let result = 0;
for(let i = 1; i <= N; i++){
    const [H, B, K] = input[i].split(" ").map(Number);
    result += Math.max(B - H, 0) * K;
}
console.log(result);