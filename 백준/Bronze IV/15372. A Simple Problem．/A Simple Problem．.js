const [T, ...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
const result = [];
for(let i = 0n; i < T; i++){
    result.push((N[i] * N[i]).toString());
}
console.log(result.join("\n"));