const fs = require('fs');
const [A, B] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
console.log((B + 1) * (2 + B * (A - 2)) / 2);