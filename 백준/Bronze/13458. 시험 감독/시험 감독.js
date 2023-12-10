const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const N = input[0][0];
const A = input[1];
const [B, C] = input[2];
let result = N;
for(let i = 0; i < N; i++){
    const res = A[i] - B;
    if(res > 0){
        result += Math.ceil(res / C);
    }
}
console.log(result);