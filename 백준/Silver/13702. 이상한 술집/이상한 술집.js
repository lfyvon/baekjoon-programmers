const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const M = input.slice(1).map(Number);
let start = 0;
let end = Math.max(...M);
let result = 0;
while(start <= end){
    let mid = Math.floor((start + end) / 2);
    let share = 0;
    for(let i = 0; i < N; i++){
        share += Math.floor(M[i] / mid);
    }
    if(share >= K){
        start = mid + 1;
        result = mid;
    } else {
        end = mid - 1;
    }
}
console.log(result);