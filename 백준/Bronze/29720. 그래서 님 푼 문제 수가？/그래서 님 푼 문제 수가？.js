const fs = require('fs');
const [N, M, K] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
const min = N - M * K;
console.log(`${Math.max(min, 0)} ${Math.max(min + M - 1, N < M ? N - 1 : 0)}`);
