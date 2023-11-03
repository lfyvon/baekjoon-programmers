const [n, ...lv] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let count = 0;
for(let i = n - 1; i >= 0; i--){
    const diff = lv[i] - lv[i - 1] - 1;
    if(diff < 0){
        lv[i - 1] += diff;
        count -= diff
    }
}
console.log(count);