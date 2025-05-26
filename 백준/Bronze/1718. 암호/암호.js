const fs = require('fs');
let [p, c] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().split("\n");
const n = p.length;
const pNum = p.split("").map(el => el.charCodeAt());
const cNum = c.split("").map(el => el.charCodeAt() - 96);
let result = "";
for(let i = 0; i < n; i++){
    if(p[i] === " "){
        result += " ";
        continue;
    } 
    let sum = pNum[i] - cNum[i % c.length];
    if(sum > 122){
        sum = sum % 123 + 97;
    } else if(sum < 97){
        sum = sum + 26
    }
    result += String.fromCharCode(sum > 122 ? sum % 123 + 97 : sum);
}
console.log(result);