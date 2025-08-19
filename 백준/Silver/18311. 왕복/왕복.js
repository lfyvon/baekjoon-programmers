const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const sum = arr.reduce((a, b) => a + b, 0);
let result = 0;

if(sum >= K){
    let count = 0;
    for(let i = 0; i < N; i++){
        result = i + 1;
        count += arr[i];
        if(count > K){
            break;
        }        
    }  
} else{
    let count = K - sum;
    for(let i = N - 1; i >= 0; i--){
        result = i + 1;
        count -= arr[i];
        if(count < 0){
            break;
        }        
    }
}
console.log(result);