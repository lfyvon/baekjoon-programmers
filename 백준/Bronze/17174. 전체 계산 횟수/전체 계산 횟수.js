const fs = require('fs');
let [N, M] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
let count = N;
while(N >= M){
    let bundle = Math.floor(N / M); 
    count += bundle;
    N = bundle;
}
console.log(count);