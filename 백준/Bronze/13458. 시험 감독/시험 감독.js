const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const [B, C] = input[2].split(" ").map(Number);
let result = N;
for(let i = 0; i < N; i++){
    const res = A[i] - B;
    if(res > 0){
        result += Math.ceil(res / C);
    }
}
console.log(result);