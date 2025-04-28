const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
let count = 0;
for(let i = 1; i <= N; i++){
    if(input[i][0] === 'C') count++;
}
console.log(count);