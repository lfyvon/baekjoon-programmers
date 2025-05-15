const fs = require('fs');
const [A, B] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(el => el.trim());
const set = new Set(A.split(""));
let result = "";

for(let i = 0; i < B.length; i++){
    if(set.has(B[i])) continue;
    result += B[i];
}
console.log(result);
