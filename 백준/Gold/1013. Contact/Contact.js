const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const re = /^(100+1+|01)+$/;
const result = [];
for(let i = 1; i <= n; i++){
    result.push(re.test(input[i].trim()) ? "YES" : "NO");
}
console.log(result.join("\n"));