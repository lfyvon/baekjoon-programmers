const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const primeList = [...Array(n + 1)].map((x, i) => i);
primeList[1] = 0;
let count = 0;
let result = 0;
for(let i = 2; i <= n; i++){
    if(primeList[i]){
        // count++;
        for(let j = i; j <= n; j += i){
            if(primeList[j]) count++;
            if(count === k && !result) result = j;
            primeList[j] = 0;
        }
    }
}
console.log(result);