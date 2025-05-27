const fs = require('fs');
const [N, L] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
console.log("1".repeat(L - 1) + N);