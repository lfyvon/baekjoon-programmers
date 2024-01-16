const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];
let i = 0;
while(input[i] !== "0 0 0"){
    const [P, L, V] = input[i].split(" ").map(Number);
    result.push(`Case ${i + 1}: ${P * Math.floor(V / L) + Math.min(V % L, P)}`);
    i++;
}
console.log(result.join("\n"));