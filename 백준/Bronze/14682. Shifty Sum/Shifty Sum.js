const fs = require('fs');
const [N, k] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
let result = 0;
for(let i = 0; i <= k; i++){
    result += N * (10** i);
}
console.log(result);