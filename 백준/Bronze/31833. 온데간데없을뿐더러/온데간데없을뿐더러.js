const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const A = BigInt(input[1].split(" ").join(""));
const B = BigInt(input[2].split(" ").join(""));
console.log((A < B ? A : B).toString());