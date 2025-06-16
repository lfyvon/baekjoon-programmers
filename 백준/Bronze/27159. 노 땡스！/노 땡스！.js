const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const X = input[1].split(" ").map(Number);
let result = X[0];

for(let i = 1; i < N; i++){
    if(X[i] - 1 !== X[i - 1]) result += X[i];
}
console.log(result);