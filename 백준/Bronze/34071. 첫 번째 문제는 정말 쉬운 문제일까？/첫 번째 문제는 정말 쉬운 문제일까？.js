const fs = require('fs');
const [N, ...arr] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
let f = arr[0];
let min = arr.sort((a, b) => a - b)[0];
let max = arr.sort((a, b) => a - b)[N - 1];
console.log(f === min ? "ez" : f === max ? 'hard' : "?");