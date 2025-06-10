const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const result = [];

for(let i = 1; i <= N; i++){
    const [A, B] = input[i].split(" ").map(Number);
    result.push(Math.floor(A / B) ** 2);
}
console.log(result.join("\n"));