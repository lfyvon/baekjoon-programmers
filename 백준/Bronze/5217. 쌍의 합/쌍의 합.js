const fs = require('fs');
const [T, ...N] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
const result = [];

for(let i = 0; i < T; i++){
    let str = `Pairs for ${N[i]}: `
    let num = [];
    for(let j = 1; j < N[i] / 2; j++){
        num.push(`${j} ${N[i] - j}`);
    }
    str += num.join(", ");
    result.push(str.trim());
}
console.log(result.join("\n"));