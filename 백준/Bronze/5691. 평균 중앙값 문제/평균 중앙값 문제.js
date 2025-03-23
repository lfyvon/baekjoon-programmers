const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
let i = 0;
const result = [];
while(input[i] !== '0 0'){
    const [a, b] = input[i++].split(" ").map(Number);
    result.push(a * 2 - b);
}
console.log(result.join("\n"));