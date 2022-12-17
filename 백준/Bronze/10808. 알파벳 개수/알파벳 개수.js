const s = require('fs').readFileSync('/dev/stdin').toString();
const arr = new Array(26).fill(0);

for(let i = 0; i < s.length; i++){
    arr[s.charCodeAt(i) - 97]++;
}

console.log(arr.join(' '));