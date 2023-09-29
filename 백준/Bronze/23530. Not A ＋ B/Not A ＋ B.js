const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const result = new Array(t).fill(1);
console.log(result.join("\n"));