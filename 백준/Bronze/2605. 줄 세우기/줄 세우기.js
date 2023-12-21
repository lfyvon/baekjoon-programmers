const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const std = input[1].split(" ").map(Number);
let line = [1];
for(let i = 1; i < n; i++){
    line.splice(line.length - std[i], 0, i + 1);
}
console.log(line.join(" "));