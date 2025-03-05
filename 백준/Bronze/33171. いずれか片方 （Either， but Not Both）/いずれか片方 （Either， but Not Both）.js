const [N, A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = 0;
for(let i = 1; i <= N; i++){
    if(i % A === 0 && i % B === 0) continue;
    if(i % A === 0 || i % B === 0) result++;
}
console.log(result);