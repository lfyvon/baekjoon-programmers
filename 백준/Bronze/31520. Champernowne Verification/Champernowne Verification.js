const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = input.length;
let result = N;
for(let i = 0; i < N; i++){
    if(Number(input[i]) !== i + 1){
        result = -1;
        break;
    }
}
console.log(result);