const fs = require('fs');
const [n, x] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
console.log((n - 1) * x);
