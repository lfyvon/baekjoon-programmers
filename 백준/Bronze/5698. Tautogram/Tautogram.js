const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const result = [];
let i = 0;
while(input[i] !== '*'){
    const S = input[i].trim().split(" ").map(el => el[0].toUpperCase()).join("");
    result.push(S.split(S[0]).join("").length ? "N" : "Y");
    i++;
}
console.log(result.join("\n"));