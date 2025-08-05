const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
console.log(N === 1 ? 0 : Math.ceil(N * N / 2));
