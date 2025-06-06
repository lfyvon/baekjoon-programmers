const fs = require('fs');
const [T, ...W] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
const result = [];

for(let i = 0; i < T; i++){
    let sum = 0;
    for(let k = 1; k <= W[i]; k++){
        sum += k * (k + 1) * (k + 2) / 2; 
    }
    result.push(sum);
}
console.log(result.join("\n"));