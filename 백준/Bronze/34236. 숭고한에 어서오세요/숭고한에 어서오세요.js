const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
console.log(arr[N - 1] + arr[1] - arr[0]);