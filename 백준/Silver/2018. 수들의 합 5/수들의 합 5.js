const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let start = 1;
let end = 1;
let sum = 1;
let count = 1;
let end_max = parseInt(n / 2) + 1

while(start !== end_max){
    if(sum === n){
        count++;
        end++;
        sum += end;
    } else if(sum > n){
        sum -= start;
        start++;
    } else{
        end++;
        sum += end;
    }

}

console.log(count);