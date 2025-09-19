const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
let [maxT, minB] = input[1].split(" ").map(Number);

for(let i = 2; i <= N; i++){
    const [T, B] = input[i].split(" ").map(Number);
    if(maxT < T) maxT = T;
    if(minB > B) minB = B;
}
console.log(maxT * minB % 7 + 1);