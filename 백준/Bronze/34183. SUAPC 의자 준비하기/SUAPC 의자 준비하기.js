const fs = require('fs');
const [N, M, A, B] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
let chair = Math.max(N * 3 - M, 0);
console.log(chair > 0 ? chair * A + B : 0);