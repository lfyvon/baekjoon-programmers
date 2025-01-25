const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const arr = input[i].split(" ").map(Number).filter(el => el % 2 === 0);
    result.push(`${arr.reduce((a, b) => a + b, 0)} ${Math.min(...arr)}`);
}
console.log(result.join("\n"));