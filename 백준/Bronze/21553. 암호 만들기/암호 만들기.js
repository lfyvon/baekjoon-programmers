const fs = require('fs');
const [A, P] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
console.log(P);