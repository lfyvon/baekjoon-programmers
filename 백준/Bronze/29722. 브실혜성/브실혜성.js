const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
let [y, m, d] = input[0].split('-').map(Number);
const N = Number(input[1]);

d += N;
m += Math.floor((d - 1)/ 30);
d = (d - 1) % 30 + 1;
y += Math.floor((m - 1) / 12);
m = (m - 1) % 12 + 1;

console.log(`${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`);