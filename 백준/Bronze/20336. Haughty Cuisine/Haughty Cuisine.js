const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const list = input.slice(1).map(el => el.trim().split(" ")).sort((a, b) => +b - +a);
console.log(list[0].join("\n"));