const S = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const C = new Array(26).fill(0);
for(let i = 0; i < S.length; i++){
    C[S[i].codePointAt() - 65]++;
}
console.log(String.fromCharCode(C.indexOf(0) + 65));
