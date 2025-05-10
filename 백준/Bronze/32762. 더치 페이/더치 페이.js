const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let sum = 0;
for(let i = N + 1; i <= N + M; i++){
    const [t, p] = input[i].split(" ").map(Number);
    sum += p;
}
console.log(sum / N);
