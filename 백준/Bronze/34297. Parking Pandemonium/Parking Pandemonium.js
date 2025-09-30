const fs = require('fs');
const [M, K, C] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
console.log(M * C);