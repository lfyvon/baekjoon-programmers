const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, L] = input[0].split(" ").map(Number);
let result = L;
const h = input[1].split(" ").map(Number).sort((a, b) => a - b);
for(let i = 0; i < N; i++){
    if(h[i] <= result) result++;
}
console.log(result);