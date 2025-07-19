const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const result = [];

for(let i = 1; i <= N; i++){
    const [w, op] = input[i].trim().split(" ");
    if (op === "kg") result.push(`${(+w * 2.2046).toFixed(4)} lb`);
    else if (op === "lb") result.push(`${(+w * 0.4536).toFixed(4)} kg`);
    else if (op === "l") result.push(`${(+w * 0.2642).toFixed(4)} g`);
    else result.push(`${(+w * 3.7854).toFixed(4)} l`);
}
console.log(result.join("\n"));