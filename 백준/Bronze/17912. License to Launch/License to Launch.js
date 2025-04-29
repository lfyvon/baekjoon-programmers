const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);
console.log(arr.indexOf(Math.min(...arr)));