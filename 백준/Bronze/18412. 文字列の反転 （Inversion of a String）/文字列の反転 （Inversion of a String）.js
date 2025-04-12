const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [A, B, N] = input[0].split(" ").map(Number);
const str = input[1];
let result = "";

for(let i = 0; i < A; i++){
    if((i >= B - 1 && i <= N - 1)){
        result += str[B + N - i - 2];
    } else {
        result += str[i];
    }
}
console.log(result);
