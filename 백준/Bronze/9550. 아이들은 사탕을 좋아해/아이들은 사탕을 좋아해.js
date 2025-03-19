const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T * 2; i += 2){
    const [N, K] = input[i].split(" ").map(Number);
    const arr = input[i + 1].split(" ").map(Number);
    result.push(arr.reduce((a, b) => a + Math.floor(b / K), 0));
}
console.log(result.join("\n"));