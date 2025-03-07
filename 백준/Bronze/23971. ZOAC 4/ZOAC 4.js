const fs = require('fs');
const [W, H, N, M] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
const A = Math.ceil(W / (N + 1));
const B = Math.ceil(H / (M + 1));
console.log(A * B);