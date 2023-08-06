const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    result.push(Number(input[i][input[i].length - 1]) % 2 === 0 ? "even" : "odd");
}
console.log(result.join("\n"));