const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].trim().split(" ");
let result = 1;
for(let i = 1; i < N; i++){
    if(arr[0][0] !== arr[i][0]) result = 0;
}
console.log(result);