const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ");
const P = BigInt(input[0]);
const K = Number(input[1]);

const primes = new Array(K + 1).fill(1);
primes[0] = primes[1] = 0;
let result = "GOOD";


for(let i = 2; i < Math.sqrt(K); i++){
    if(primes[i]){
        for(let j = i * i; j <= K; j += i){
            primes[j] = 0;
        }
    }
}

for(let i = 2; i < K; i++){
    if(primes[i] && P % BigInt(i) === 0n){
        result = `BAD ${i}`;
        break;
    }
}
console.log(result);