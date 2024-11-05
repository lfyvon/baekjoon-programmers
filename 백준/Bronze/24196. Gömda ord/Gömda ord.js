const S = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let result = S[0];
let i = 0;
while(true){
    let idx = S[i].charCodeAt() - 64;
    if(idx + i >= S.length) break;
    result += S[idx + i];
    i += idx;
}
console.log(result);
