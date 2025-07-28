const fs = require('fs');
const t = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number).reduce((a, b) => a + b, 0);
console.log(t + 300 <= 1800 ? "Yes" : "No");
