const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const stack = [];
const result = new Array(N).fill(-1);
for(let i = 0; i < N; i++){
    while(stack.length && A[stack[stack.length - 1]] < A[i]){
        result[stack.pop()] = A[i];
    }
    stack.push(i);
}
console.log(result.join(" "));