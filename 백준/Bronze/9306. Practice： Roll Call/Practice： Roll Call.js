const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N * 2; i += 2){
    const A = input[i].trim();
    const B = input[i + 1].trim();
    result.push(`Case ${(i + 1) / 2}: ${B}, ${A}`);
}
console.log(result.join("\n"));