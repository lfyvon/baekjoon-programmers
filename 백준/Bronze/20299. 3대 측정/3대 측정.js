const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [N, K, L] = input[0].split(" ").map(Number);
let count = 0;
const result = [];

for(let i = 1; i <= N; i++){
    const X = input[i].split(" ").map(Number);
    let check = true;
    let sum = 0;
    for(let j = 0; j < 3; j++){
        if(X[j] < L) check = false;
        sum += X[j];
    }
    if(check && sum >= K){
        count++;
        result.push(...X);
    } 
}
console.log(count);
console.log(result.join(" "));