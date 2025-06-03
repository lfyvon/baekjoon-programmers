const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const S = input[1].split("").map(el => el.codePointAt() - 64);
let count = 1;
for(let i = 1; i < N; i++){
    if(Math.abs(S[i] - S[i - 1]) === 1){
        count++;
        if(count >= 5) break;
    } else {
        count = 1;
    }
}
console.log(count >= 5 ? "YES" : "NO");