const fs = require('fs');
const [N, X] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
const loss = N * (1 - X / 100);
console.log((N / loss - 1) * 100)