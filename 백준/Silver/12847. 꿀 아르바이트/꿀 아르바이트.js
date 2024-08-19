const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let sum = A.slice(0, m).reduce((a, b) => a + b, 0);
const result = [sum];
for(let i = m; i < n; i++){
    sum += A[i] - A[i - m];
    result.push(sum);
}
console.log(Math.max(...result));