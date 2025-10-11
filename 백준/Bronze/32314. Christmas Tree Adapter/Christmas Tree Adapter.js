const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const a = Number(input[0]);
const[w, v] = input[1].split(" ").map(Number);
console.log(Number(a <= w / v));