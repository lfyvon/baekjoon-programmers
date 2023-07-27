const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = input[0].split(" ").map(Number).sort((a, b) => a - b);
const obj = {"A" : num[0], "B" : num[1], "C" : num[2]};
console.log(input[1].split("").map(el => obj[el]).join(" "));