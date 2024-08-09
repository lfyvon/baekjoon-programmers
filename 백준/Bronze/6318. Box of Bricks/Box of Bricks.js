const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
const result = [];
while(input[i] !== '0'){
    const N = Number(input[i++]);
    const arr = input[i++].split(" ").map(Number);
    const avg = arr.reduce((a, b) => a + b, 0) / N;
    const sum = arr.reduce((a, b) => a + Math.abs(b - avg), 0) / 2;
    result.push(`Set #${i / 2}`);
    result.push(`The minimum number of moves is ${sum}.` + '\n');
}
console.log(result.join("\n"));