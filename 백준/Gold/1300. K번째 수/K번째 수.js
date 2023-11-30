const [N, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let left = 0;
let right = N * N;
let result = 0;

while(left <= right){
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    for(let i = 1; i <= N; i++){
        count += Math.min(Math.floor(mid / i), N);
    }
    if(count >= k){
        result = mid;
        right = mid - 1;
    } else{
        left = mid + 1;
    }
}
console.log(result);