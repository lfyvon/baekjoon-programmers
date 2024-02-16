const [T, ...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    result.push(N[i] ** 2);
}
console.log(result.join("\n"));