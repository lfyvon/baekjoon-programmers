const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    result.push(input[i].toLowerCase());
}
console.log(result.join('\n'));