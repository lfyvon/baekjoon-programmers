const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const result = [];

for(let i = 1; i <= N; i++){
    const [N, D, A, B, F] = input[i].split(" ").map(Number);
    result.push(`${N} ${(D / (A + B) * F).toFixed(6)}`);
}
console.log(result.join("\n"));