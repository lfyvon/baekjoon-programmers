const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
let result = 1;

for(let i = 0; i < 5; i++){
    result *= N - i;
}

console.log(result / 120);