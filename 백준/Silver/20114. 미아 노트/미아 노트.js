const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [N, H, W] = input[0].split(" ").map(Number);
let result = new Array(N).fill("?");

for(let i = 1; i <= H; i++){
    let str = input[i];
    for(let i = 0; i < N * W; i += W){
        let c = str.slice(i, i + W).split("").sort()[W - 1];
        if(c !== "?") result[Math.floor(i / W)] = c;
    }
}
console.log(result.join(""));