const fs = require('fs');
const [N, P, C] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
console.log(N * C);