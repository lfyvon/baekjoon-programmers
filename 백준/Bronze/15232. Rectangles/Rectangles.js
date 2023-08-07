const [r, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < r; i++){
    result.push("*".repeat(c));
}
console.log(result.join("\n"));