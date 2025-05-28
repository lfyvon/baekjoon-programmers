const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const T = Number(input[0]);
let result = '';

for(let i = 1; i <= T; i++){
    result += `Material Management ${i}\nClassification ---- End!\n`;
}
console.log(result.trim());
