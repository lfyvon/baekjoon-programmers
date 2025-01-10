const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let Y = M = 0;
for(let i = 0; i < N; i++){
    Y += Math.ceil((arr[i] + 1) / 30) * 10;
    M += Math.ceil((arr[i] + 1) / 60) * 15;
}
console.log(`${Y < M ? "Y" : Y > M ? "M" : "Y M"} ${Math.min(Y, M)}`);