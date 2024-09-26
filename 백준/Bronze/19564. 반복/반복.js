const S = require('fs').readFileSync('/dev/stdin').toString().trim();
const L = S.length;
let K = 1;
for(let i = 1; i < L; i++){
    if(S[i - 1] >= S[i]) K++;
}
console.log(K);