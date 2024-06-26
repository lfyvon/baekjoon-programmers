const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    if(input[i][input[i].length - 1] !== ".") input[i] += ".";
    result.push(input[i]);   
}
console.log(result.join("\n"));