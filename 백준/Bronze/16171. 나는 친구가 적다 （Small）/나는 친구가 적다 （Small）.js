const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const S1 = input[0].trim().replace(/[0-9]/g, "");
const S2 = input[1];
console.log(Number(S1.includes(S2)));
