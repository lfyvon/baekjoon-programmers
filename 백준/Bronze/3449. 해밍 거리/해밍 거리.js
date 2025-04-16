const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const result = [];

for(let i = 1; i <= N * 2; i += 2){
    const A = input[i].trim();
    const B = input[i + 1].trim();
    let count = 0;
    for(let j = 0; j < A.length; j++){
        if(A[j] !== B[j]) count++;
    }
    result.push(`Hamming distance is ${count}.`);
}
console.log(result.join("\n"));