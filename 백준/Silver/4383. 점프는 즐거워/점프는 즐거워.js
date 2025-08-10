const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const result = [];
let idx = 0;

while(input[idx]){
    const [n, ...arr] = input[idx++].trim().split(/\s+/).map(Number);
    const num = new Array(n).fill(0);
    num[0] = 1;
    for(let i = 1; i < n; i++){
        let diff = Math.abs(arr[i] - arr[i - 1]);
        if(diff > 0 && diff < n){
            num[diff] = 1;
        } 
    }
    if(num.filter(el => el === 1).length === n){
        result.push("Jolly");
    } else{
        result.push("Not jolly");        
    }
}
console.log(result.join("\n"));