const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
let c = 0;
const result = [];
for(let i = 0; i < t; i++){
    const [n, m] = input[++c].split(" ").map(Number);
    result.push(n - 1);
    c += m;
}
console.log(result.join("\n"));