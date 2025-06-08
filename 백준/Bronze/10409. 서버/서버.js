const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [n, T] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let sum = 0;
let result = 0;

for(let i = 0; i < n; i++){
    if(sum + arr[i] <= T){
        sum += arr[i];
        result++;
    } else break;
}
console.log(result);