const fs = require('fs');
const k = (fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
console.log("1".repeat(k) + "0".repeat(k - 1));