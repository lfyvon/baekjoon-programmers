const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
let i = 0;
const result = [];
while(input[i] !== "0"){
    const N = Number(input[i++]);
    if(N >= 5000000) result.push(N * 0.8);
    else if(N >= 1000000) result.push(N * 0.9);
    else result.push(N);
}
console.log(result.join("\n"));