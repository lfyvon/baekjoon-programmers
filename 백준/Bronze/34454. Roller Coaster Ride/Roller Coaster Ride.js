const fs = require('fs');
const [N, C, P] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
console.log(C * P >= N ? "yes" : "no");