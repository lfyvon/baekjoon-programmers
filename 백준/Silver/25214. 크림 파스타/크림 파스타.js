const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const D = new Array(N).fill(0);
let min = A[0];
for(let i = 1; i < N; i++){
    min = Math.min(A[i], min);
    D[i] = Math.max(D[i - 1], A[i] - min);
}
console.log(D.join(" "));