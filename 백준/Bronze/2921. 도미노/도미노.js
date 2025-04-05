const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
let result = 3;
for(let i = 2; i <= N; i++){
    result += 3 * (i * (i + 1)) / 2;
}
console.log(result);
