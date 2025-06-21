const fs = require('fs');
const [A, B, C] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(BigInt);
console.log((C % 2n === 0n ? A : A ^ B).toString());
