const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = parseInt(input[0]);
const n = input.slice(1).map(el => parseInt(el));
const max = 10000;
let result = "";
const isPrime = new Array(max + 1).fill(true);
isPrime[0] = isPrime[1] = false;
for(let i = 2; i <= max; i++){
    if(isPrime[i]){
        for(let j = i * i; j <= max; j += i){
            isPrime[j] = false;
        }
    }
}

for(let i = 0; i < t; i++){
    let check = Math.ceil(n[i] / 2);
    for(let j = check; j > 1; j--){
        if(isPrime[j]){
            if(isPrime[n[i] - j]){
                result += j + ' ' + (n[i] - j) + '\n';
                break;
            }
        }
    }
}

console.log(result.trim());