const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [A, B] = input[0].split(" ").map(Number);
const [C, D] = input[1].split(" ").map(Number);
const H = A + C;
const Y = B + D;

console.log(H < Y ? "Hanyang Univ." : H > Y ? "Yongdap" : "Either");