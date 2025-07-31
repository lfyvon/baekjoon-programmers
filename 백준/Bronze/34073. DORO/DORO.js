const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
console.log(input[1].split(" ").map(el => el + "DORO").join(" "));