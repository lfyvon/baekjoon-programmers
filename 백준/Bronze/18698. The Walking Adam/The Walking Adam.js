const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    result.push(input[i].split('D')[0].length);
}
console.log(result.join("\n"));