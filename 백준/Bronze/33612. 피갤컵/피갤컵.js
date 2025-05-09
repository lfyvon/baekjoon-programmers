const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim()) * 7;
console.log(`${2024 + Math.floor(N / 12)} ${N % 12 + 1}`);