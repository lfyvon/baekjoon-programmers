const fs = require('fs');
const N = (fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
let result = Math.floor(N / 2) + 1;
console.log(N % 2 === 0 ? result * result : result * (result + 1)); 