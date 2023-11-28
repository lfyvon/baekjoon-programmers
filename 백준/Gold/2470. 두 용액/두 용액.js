const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const solution = input[1].split(" ").map(Number).sort((a, b) => a - b);
let left = 0;
let right = N - 1;
let min = Infinity;
let result;
while(left < right){
    let sum = solution[left] + solution[right];
    if(Math.abs(sum) < min){
        min = Math.abs(sum);
        result = [solution[left], solution[right]];
    }
    if(sum < 0){
        left++;
    } else if(sum > 0){
        right--;
    } else{
        break;
    }
}
console.log(result.join(" "));