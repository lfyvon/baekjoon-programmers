const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const H = input[1].split(" ").map(Number);
let result = N * 2 + H[0] * 3 + H[N - 1];

for(let i = 1; i < N; i++){
    result += Math.abs(H[i] - H[i - 1]) + H[i] * 2;
}

console.log(result);