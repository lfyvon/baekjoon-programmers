const fs = require('fs');
const [w, l] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
console.log(w * l);
