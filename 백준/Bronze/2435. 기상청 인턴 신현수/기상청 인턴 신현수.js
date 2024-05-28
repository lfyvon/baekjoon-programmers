const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const temp = input[1].split(" ").map(Number);
let sum = temp.slice(0, K).reduce((a, b) => a + b, 0);
let max = sum;
for(let i = K; i < N; i++){
    sum += temp[i] - temp[i - K];
    max = Math.max(sum, max);
}
console.log(max);