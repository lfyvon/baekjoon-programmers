const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const K = input[1].split(" ").map(Number);
let result = 0;

for(let i = 1; i <= N; i++){
    for(let j = 0; j < M; j++){
        if(i % K[j] === 0){
            result += i;
            break;
        }
    }
}
console.log(result);