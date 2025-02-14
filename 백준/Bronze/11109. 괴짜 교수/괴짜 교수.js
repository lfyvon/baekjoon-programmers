const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const [d, n, s, p] = input[i].split(" ").map(Number);
    result.push(d + n * p === n * s ? "does not matter" : d + n * p > n * s ? "do not parallelize" : "parallelize");
}
console.log(result.join("\n"));