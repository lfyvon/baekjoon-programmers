const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
let result = [1, ...input[1].split(" ").map(Number)];
for(let i = 2; i <= N; i++){
    const [t, s] = input[i].split(" ").map(Number);
    if(result[2] < s) result = [i, t, s];
}
const [i, t, s] = result;
console.log(s === 0 ? 0 : t + (i - 1) * 20);