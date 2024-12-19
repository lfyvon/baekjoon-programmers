const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    result.push(input[i].split(" ").map(Number).reduce((a, b) => a + b, 0));
}
console.log(result.join("\n"));