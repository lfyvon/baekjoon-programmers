const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 0; i < t; i++){
    result.push(input[i * 2 + 2].split(" ").map(Number).reduce((a, b) => a + b, 0));    
}
console.log(result.join("\n"));