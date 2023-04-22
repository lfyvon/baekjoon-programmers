const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const goal = 100;
let sum = 0;
let result = 0;
for(let i = 0; i < 10; i++){
    sum += input[i];
    if(sum >= 100){
        if(Math.abs(sum - goal) <= Math.abs(sum - input[i] - goal)) result = sum;
        else result = sum - input[i];
        break;
    }
}
console.log(result ? result : sum);