const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(el => el.trim().split(" "));
console.log(input.sort((a, b) => a[1] - b[1]).map(el => el[1] % 100).join(""));
console.log(input.sort((a, b) => Number(b[0]) - Number(a[0])).map(el => el[2][0]).join(""));