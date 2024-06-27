const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const T = input[0];
let result = [];
for(let i = 1; i <= T; i++){
    let N = input[i];
    let count = N === 1 ? 0 : 1;
    for(let b = 2; b < N; b++){
        let a = b;
        while(a <= N && N % a === 0){
            count++;
            a *= b;
        }
    }
    result.push(count);
}
console.log(result.join("\n"));