const fs = require('fs');
const [L, R, A] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
const diff = A - Math.abs(L - R);
console.log(diff >= 0 ? L + R + A - diff % 2 : L + R + A + diff);