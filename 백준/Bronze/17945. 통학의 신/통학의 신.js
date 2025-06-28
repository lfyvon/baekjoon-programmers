const fs = require('fs');
const [A, B] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
const result = [];

for(let i = -1000; i <= 1000; i++){
    if(i ** 2 + 2 * A * i + B === 0){
        result.push(i);
    }
}
console.log(result.join(" "));