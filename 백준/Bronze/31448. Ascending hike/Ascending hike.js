const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
let count = 0;
let result = [];
for(let i = 1; i < N; i++){
    if(A[i] >= A[i - 1]) count += A[i] - A[i - 1]
    else {
        result.push(count);
        count = 0;
    };
}
result.push(count);
console.log(Math.max(...result));