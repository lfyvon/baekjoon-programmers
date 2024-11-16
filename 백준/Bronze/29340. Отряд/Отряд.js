const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim().split("").map(Number));
const result = [];

for(let i = 0; i < a.length; i++){
    result.push(Math.max(a[i], b[i]));
}

console.log(result.join(""));