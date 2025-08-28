const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const S = input[1].trim().split("");
console.log(S.reduce((a, b) => a + b.charCodeAt(0) - 64, 0));