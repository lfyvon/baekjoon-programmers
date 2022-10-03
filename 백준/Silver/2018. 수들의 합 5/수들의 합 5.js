const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let start = 1;
let end = 1;
let sum = 1;
let count = 1;

while(end !== n){
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