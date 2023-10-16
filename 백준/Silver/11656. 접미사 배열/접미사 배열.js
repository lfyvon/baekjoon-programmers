const S = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = [];
for(let i = 0; i < S.length; i++){
    arr.push(S.slice(i));
}
console.log(arr.sort((a, b) => a > b ? 1 : -1).join("\n"));