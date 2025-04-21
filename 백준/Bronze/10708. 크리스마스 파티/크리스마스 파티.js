const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const M = Number(input[1]);
const A = input[2].split(" ").map(Number);
const result = new Array(N).fill(0);

for(let i = 3; i < M + 3; i++){
    const arr = input[i].split(" ").map(Number);
    let count = 0;
    for(let j = 0; j < N; j++){
        if(A[i - 3] === arr[j]) result[j]++;
        else count++;
    }
    result[A[i - 3] - 1] += count;
}
console.log(result.join("\n"));