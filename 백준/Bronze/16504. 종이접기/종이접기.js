const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
let sum = 0;
for(let i = 1; i <= N; i++){
    sum += input[i].split(" ").map(Number).reduce((a, b) => a + b, 0);
}
console.log(sum);