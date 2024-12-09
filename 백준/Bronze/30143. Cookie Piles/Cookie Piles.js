const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const [N, A, D] = input[i].split(" ").map(Number);
    result.push(N * A + D * Math.floor((N * (N - 1)) / 2));
}
console.log(result.join("\n"));