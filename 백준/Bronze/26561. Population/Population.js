const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const [p, t] = input[i].split(" ").map(Number);
    result.push(p - Math.floor(t / 7) + Math.floor(t / 4));
}
console.log(result.join("\n"));