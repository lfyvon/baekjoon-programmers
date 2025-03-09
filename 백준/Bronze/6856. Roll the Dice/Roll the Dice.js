const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = 0;
for(let i = 1; i <= N; i++){
    for(let j = 1; j <= M; j++){
        if(i + j === 10) result++;
    }
}
console.log(`There ${result === 1 ? "is" : "are"} ${result} ${result === 1 ? "way" : "ways"} to get the sum 10.`);