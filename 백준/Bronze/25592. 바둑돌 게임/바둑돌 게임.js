const fs = require('fs');
let N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
let count = 1;

while(N >= 0){
    N -= count;
    count++;
}
console.log(count % 2 === 0 ? Math.abs(N) : 0);