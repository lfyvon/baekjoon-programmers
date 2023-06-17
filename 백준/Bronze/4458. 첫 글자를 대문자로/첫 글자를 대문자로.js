const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    result.push(input[i][0].toUpperCase() + input[i].substring(1));
}
console.log(result.join("\n"));