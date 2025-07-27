const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
const gan = ["7", "8", "9", "0", "1", "2", "3", "4", "5", "6"];
const ji = ["J", "K", "L", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
console.log(ji[(N - 1) % 12] + gan[(N - 1) % 10]);
