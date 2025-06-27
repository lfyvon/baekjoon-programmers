const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const result = [];
let i = 0;
while(input[i] !== '***'){
    result.push(input[i++].replace(/\r/g, '').split("").reverse().join(""));
}
console.log(result.join("\n"));