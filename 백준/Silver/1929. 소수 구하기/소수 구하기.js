const [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => parseInt(el));

let primeList = [...Array(n + 1)].map((x, i) => i);
primeList[1] = 0;
let result = [];

for(let i = 2; i * i <= n; i++){
    if(primeList[i]){
        for(let j = i * i; j <= n; j += i){
            primeList[j] = 0;
        }
    }
}

result = primeList.filter(el => el !== 0 && el >= m);
console.log(result.join('\n'));