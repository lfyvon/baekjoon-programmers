const fs = require('fs');
const [m, n, y] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
console.log(m * n);
