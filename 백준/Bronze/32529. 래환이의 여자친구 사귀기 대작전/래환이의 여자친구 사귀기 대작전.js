const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let count = 0;
let result = -1;

for(let i = N - 1; i >= 0; i--){
    count += A[i];
    if(count >= M){
        result = i + 1;
        break;
    }
}
console.log(result);