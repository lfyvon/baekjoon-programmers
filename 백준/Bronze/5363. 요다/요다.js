const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const result = [];

for(let i = 1; i <= N; i++){
    const S = input[i].trim().split(" ");
    result.push([...S.slice(2), ...S.slice(0, 2)].join(" "));
}
console.log(result.join("\n"));