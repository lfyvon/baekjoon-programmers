const fs = require('fs');
const [X, Y] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
console.log(Number('1'.repeat(X)) + Number('1'.repeat(Y)));
