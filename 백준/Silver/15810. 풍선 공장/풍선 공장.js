const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let start = 0;
let end = Math.min(...A) * M;
let result = 0;
while(start <= end){
    let mid = Math.floor((start + end) / 2);
    let time = 0;
    for(let i = 0; i < N; i++){
        time += Math.floor(mid / A[i]);
    }
    if(time >= M){
        end = mid - 1;
        result = mid;
    } else {
        start = mid + 1;
    }
}
console.log(result);