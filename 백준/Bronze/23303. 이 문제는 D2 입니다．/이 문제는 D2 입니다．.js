const fs = require('fs');
const str = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().toUpperCase();
console.log(str.includes("D2") ? "D2" : "unrated");