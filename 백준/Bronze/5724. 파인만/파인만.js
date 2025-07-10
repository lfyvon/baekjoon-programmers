const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const result = [];
let i = 0;
while(input[i] !== '0'){
    const n = input[i++];
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i * i;
    }
    result.push(sum);
}
console.log(result.join("\n"));