const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const result = [];

for(let i = 1; i <= N; i++){
    const list = input[i].split(" ").map(Number);
    let count = 0;
    for(let j = 0; j < 10; j++){
        if(list[j] === (j % 5 + 1)) count++;
    }
    if(count === 10) result.push(i);
}
console.log(result.join("\n"));