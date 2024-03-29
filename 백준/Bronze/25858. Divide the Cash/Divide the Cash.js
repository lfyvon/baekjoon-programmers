const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, d] = input[0].split(" ").map(Number);
let sum = 0;
for(let i = 1; i <= n; i++){
    sum += Number(input[i]);
}
const num = Math.floor(d / sum);
let result = [];
for(let i = 1; i <= n; i++){
    result.push(Math.floor(Number(input[i]) * num));
}
console.log(result.join("\n"));