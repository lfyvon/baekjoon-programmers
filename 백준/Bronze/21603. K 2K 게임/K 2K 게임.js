const fs = require('fs');
const [N, K] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
const ones = [K % 10, K * 2 % 10];
const result = [];

for(let i = 1; i <= N; i++){
    if(i % 10 !== ones[0] && i % 10 !== ones[1]){
        result.push(i);
    }
}
console.log(result.length);
console.log(result.join(" "));