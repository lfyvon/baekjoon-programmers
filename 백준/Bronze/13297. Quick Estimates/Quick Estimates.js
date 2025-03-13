const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
console.log(input.slice(1).map(el => el.trim().length).join("\n"));