const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
let i = 0;
let j = 1;
const result = [];
while(i < N){
    const M = Number(input[j++]);
    let arr = [];
    for(let x = j; x < j + M; x++){
        arr.push(input[x].split(" ").map(Number));
    }
    j += M;
    const [k, d, a] = input[j++].split(" ").map(Number);
    
    let totalSum = 0;

    for(let x = 0; x < M; x++){
        const [K, D, A] = arr[x];
        let sum = K * k - D * d + A * a;
        totalSum += sum > 0 ? sum : 0;
    }
    
    result.push(totalSum);
    
    i++;
}
console.log(result.join("\n"));
