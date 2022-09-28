const [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => parseInt(el));

let primeList = [...Array(n + 1)].map((x, i) => i);
primeList[1] = 0;
let result = [];

for(let i = m; i <= n; i++){
    if(primeList[i] === 0) continue;
    for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j === 0){
            primeList[i] = 0;
            break;
        }
    }
}

result = primeList.filter(el => el !== 0 && el >= m);
console.log(result.join('\n'));