const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
let max = 0;

for(let i = 0; i < N; i++){
    let num = A[i] - N + i;
    if(max < num) max = num;
}
console.log(max);