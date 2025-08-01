const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const result = [];
const fac = new Array(11).fill(0);
fac[0] = 1;
for(let i = 1; i <= 10; i++){
    fac[i] = fac[i - 1] * (i + 1);
}
result.push("n e");
result.push("- -----------");

let sum = 1;
for(let i = 0; i < 10; i++){
    if(i <= 2){
        result.push(`${i} ${sum}`);
    } else{
        result.push(`${i} ${sum.toFixed(9)}`);
    }
    sum += 1 / fac[i];

}
console.log(result.join("\n"));