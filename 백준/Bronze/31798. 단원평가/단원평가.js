const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [a, b, c] = input[0].split(" ").map(Number);
console.log(c === 0 ? Math.pow(a + b, 0.5) : c ** 2 - Math.max(a, b));