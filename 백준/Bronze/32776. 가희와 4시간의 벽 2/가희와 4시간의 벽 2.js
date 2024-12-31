const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const S = Number(input[0]);
const M = input[1].split(" ").map(Number).reduce((a, b) => a + b, 0);
console.log(S > M && S > 240? "flight" : "high speed rail");