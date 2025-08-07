const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
let idx = 1;
const result = [];
for(let i = 1; i <= N; i++){
    const [H, W] = input[idx++].split(" ").map(Number);
    for(let j = 0; j < H; j++){
        result.push(input[idx + j].trim().split("").reverse().join(""));
    }
    idx += H;
}
console.log(result.join("\n"));