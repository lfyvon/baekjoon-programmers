let [N, A, ...M] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
let count = 0;
while(true){
    const max = Math.max(...M);
    if(max < A){
        break;
    }
    const idx = M.indexOf(max);
    M[idx]--;
    A++;
    count++;
}
console.log(count);