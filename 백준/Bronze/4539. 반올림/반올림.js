const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    let num = input[i].trim().split("").map(Number);
    for(let j = num.length - 1; j > 0; j--){
        if(num[j] >= 5){
            num[j - 1]++;
        }
        num[j] = 0;
    }
    result.push(num.join(""));
}
console.log(result.join("\n"));