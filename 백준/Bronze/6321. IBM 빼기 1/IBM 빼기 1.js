const fs = require('fs');
if (process.platform === "linux") {
    input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
} else {
    input = fs.readFileSync('./test.txt').toString().trim().split("\n");
}

const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    let S = input[i].trim().split("");
    for(let j = 0; j < S.length; j++){
        let num = S[j].charCodeAt() + 1;
        if(num > 90) num = 65;
        S[j] = String.fromCharCode(num);
    }
    result.push(`String #${i}\n${S.join("")}\n`);
}
console.log(result.join("\n").trim());