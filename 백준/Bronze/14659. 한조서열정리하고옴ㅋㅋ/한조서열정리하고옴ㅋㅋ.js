const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const peaks = input[1].split(" ").map(Number);
const result = [];
let high = 0, count = 0;

for(let i = 0; i < N; i++){
    if(peaks[i] > high){
        high = peaks[i];
        count = 0;
    } else{
        count++;
    }
    result.push(count);
}
console.log(Math.max(...result));