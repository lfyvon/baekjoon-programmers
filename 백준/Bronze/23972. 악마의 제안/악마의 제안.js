const fs = require('fs');
const [K, N] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
let result = -1;
if(N !== 1){
    result = Math.floor((K * N) /(N - 1));
    if((K * N) % (N - 1)) result += 1; 
}
console.log(result);