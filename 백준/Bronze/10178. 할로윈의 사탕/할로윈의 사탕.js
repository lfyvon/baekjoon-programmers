const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const [c, v] = input[i].split(" ").map(Number);
    result.push(`You get ${Math.floor(c / v)} piece(s) and your dad gets ${c % v} piece(s).`);
}
console.log(result.join("\n"));