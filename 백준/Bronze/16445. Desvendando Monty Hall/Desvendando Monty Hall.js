const fs = require('fs');
const [N, ...doors] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
let count = 0;

for(let i = 0; i < N; i++){
    if(doors[i] !== 1) count++;
}
console.log(count);
