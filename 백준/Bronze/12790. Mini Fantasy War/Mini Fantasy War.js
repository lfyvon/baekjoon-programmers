const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const T = Number(input[0]);
const result = [];

for(let i = 1; i <= T; i++){
    const arr = input[i].split(" ").map(Number);
    let sum = 0;
    sum += Math.max(arr[0] + arr[4], 1);
    sum += Math.max(arr[1] + arr[5], 1) * 5;
    sum += Math.max(arr[2] + arr[6], 0) * 2;
    sum += (arr[3] + arr[7]) * 2;
    result.push(sum);
}
console.log(result.join("\n"));