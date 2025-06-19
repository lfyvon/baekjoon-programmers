const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const n = Number(input[0]);
let m = Number(input[1]);
let count = m;

for(let i = 2; i < n + 2; i++){
    const [a, b] = input[i].split(" ").map(Number);
    m += a - b;
    count = Math.max(count, m);
    if(m < 0){
        count = 0;
        break;
    }
}
console.log(count);