const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);
let sum = arr.reduce((a, b) => a + b, 0);
let result = 0;
for(let i = 0; i < N; i++){
    sum -= arr[i];
    result +=  sum * arr[i];
}
console.log(result);
