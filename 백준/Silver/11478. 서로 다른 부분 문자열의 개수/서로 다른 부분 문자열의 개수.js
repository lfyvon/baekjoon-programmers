const s = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = s.length;
let set = new Set();
for(let i = 0; i <= n; i++){
    for(let j = i + 1; j <= n; j++){
        set.add(s.slice(i, j));
    }
}
console.log(set.size);