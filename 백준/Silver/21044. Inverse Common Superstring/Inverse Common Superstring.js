const S = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = 'a';
while(S.includes(result)){
    result += 'a';
}
console.log(result);