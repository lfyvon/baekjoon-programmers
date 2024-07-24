const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const [n, m] = input[i].split(" ").map(BigInt);
    result.push(`Scenario #${i}:`);
    result.push((m - n + 1n) * (m + n) / 2n + "\n");
}
console.log(result.join("\n").trim());