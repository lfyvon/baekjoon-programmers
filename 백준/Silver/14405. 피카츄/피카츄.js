const fs = require('fs');
const S = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().replaceAll("pi", " ").replaceAll("ka", " ").replaceAll("chu", " ");
console.log(!S.trim() ? "YES" : "NO");