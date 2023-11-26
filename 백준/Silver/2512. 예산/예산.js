const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const reqList = input[1].split(" ").map(Number).sort((a, b) => a - b);
const M = Number(input[2]);
let low = 0;
let high = reqList[N - 1];

while(low <= high){
    let mid = Math.floor((low + high) / 2);
    let sum = 0;
    for(let i = 0; i < N; i++){
        sum += reqList[i] > mid ? mid : reqList[i];
    }
    if(sum <= M) low = mid + 1;
    else high = mid - 1;
}
console.log(high);