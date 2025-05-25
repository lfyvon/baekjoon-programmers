const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input.length);
const result = [];

for(let i = 0; i < N; i++){
    const [d, r, t] = input[i].split(" ").map(Number);
    if(r === 0) continue;
    const distance = d * r * Math.PI / 5280 / 12;
    const mph = distance * 3600 / t;
    result.push(`Trip #${i + 1}: ${distance.toFixed(2)} ${mph.toFixed(2)}`);
}
console.log(result.join("\n"));