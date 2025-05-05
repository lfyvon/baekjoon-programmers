const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
let i = 0;
const result = [];

while(input[i]){
    const num = input[i++];
    result.push(`${i}. ${num % 2 ? "odd" : "even"} ${Math.ceil((num - 1) / 2)}`);
}
console.log(result.join("\n"));