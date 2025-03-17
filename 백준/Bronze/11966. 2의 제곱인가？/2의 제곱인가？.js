const fs = require('fs');
const input = BigInt(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim()).toString(2);
let N = input.toString(2);
let count = 0;
for(let i = 0; i < N.length; i++){
    if(N[i] === '1') count++;
    if(count > 1) break;
}
console.log(count === 1 ? 1 : 0);