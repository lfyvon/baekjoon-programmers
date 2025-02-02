const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N * 2; i += 2){
    const arr = input[i + 1].split(" ").map(Number);
    result.push(`${Math.min(...arr)} ${Math.max(...arr)}`);
}
console.log(result.join("\n"));