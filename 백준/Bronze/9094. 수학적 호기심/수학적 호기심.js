const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const result = [];

for(let i = 1; i <= N; i++){
    const [n, m] = input[i].split(" ").map(Number);
    let count = 0;
    for(let a = 1; a < n; a++){
        for(let b = (a + 1); b < n; b++){
            if(((a ** 2) + (b ** 2) + m) % (a * b) === 0) count++;
        }
    }
    result.push(count);
}
console.log(result.join("\n"));
