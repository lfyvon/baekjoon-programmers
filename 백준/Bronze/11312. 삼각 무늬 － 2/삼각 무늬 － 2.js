const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const [A, B] = input[i].split(" ").map(Number);
    result.push(A ** 2 / B ** 2);
}
console.log(result.join("\n"));