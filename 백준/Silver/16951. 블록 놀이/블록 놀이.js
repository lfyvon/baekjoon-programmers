const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let min = N;
for(let i = 0; i < N; i++){
    let count = 0;
    for(let j = 0; j < N; j++){
        let num = A[j];
        num = A[i] + K * (j - i);
        if(num < 1){
            count = N;
            break;
        }
        if(num != A[j]) count++;
    }
    min = Math.min(min, count);
}
console.log(min);