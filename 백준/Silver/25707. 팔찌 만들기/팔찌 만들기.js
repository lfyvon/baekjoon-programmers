const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const A = input[1].split(" ").map(Number).sort((a, b) => a - b);
let result = 0;

for(let i = 1; i < N; i++){
    result += Math.abs(A[i] - A[i - 1]);
}
result += Math.abs(A[0] - A[N - 1]);

console.log(result);