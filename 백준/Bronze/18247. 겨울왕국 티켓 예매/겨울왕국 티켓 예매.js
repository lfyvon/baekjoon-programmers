const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const T = Number(input[0]);
const result = [];

for(let i = 1; i <= T; i++){
    const [N, M] = input[i].split(" ").map(Number);
    if(N > 11 && M >= 4){
        result.push(M * 11 + 4);
    } else {
        result.push(-1);
    }
}
console.log(result.join("\n"));