const [S, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const share = Math.floor(S / K);
const mod = S % K;
let result = 1;
for(let i = 0; i < K; i++){
    if(i < mod){
        result *= share + 1;
    } else{
        result *= share;
    }
}
console.log(result);