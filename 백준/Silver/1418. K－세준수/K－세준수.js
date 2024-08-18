const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let primeList = Array(N + 1).fill(0);
let result = 0;

for(let i = 2; i <= N; i++){
    if(!primeList[i]){
        for(let j = i; j <= N; j += i){
            if(j % i === 0){
                primeList[j] = i;
            }
        }
    }

}
for(let i = 1; i <= N; i++){
    if(primeList[i] <= K) result++;
}
console.log(result)