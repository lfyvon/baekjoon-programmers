const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B, C] = input[0].split(" ").map(Number);
const N = Number(input[1]);
let result = [];
let sum = 0;
for(let i = 2; i < N * 3 + 2; i++){
    const [a, b, c] = input[i].split(" ").map(Number);
    sum += a * A + b * B + c * C;
    if(i % 3 === 1){
        result.push(sum);
        sum = 0;
    }
}
console.log(Math.max(...result));