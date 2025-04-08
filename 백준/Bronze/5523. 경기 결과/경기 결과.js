const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const result = [0, 0];
for(let i = 1; i <= N; i++){
    const [A, B] = input[i].split(" ").map(Number);
    if(A > B) result[0]++;
    if(A < B) result[1]++; 
}
console.log(result.join(" "));