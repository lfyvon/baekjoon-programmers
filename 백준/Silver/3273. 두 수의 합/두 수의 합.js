const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(" ").map(Number).sort((a, b) => a - b);
const x = Number(input[2]);
let left = 0;
let right = n - 1;
let count = 0;
while(left < right){
    const sum = a[left] + a[right];
    if(sum === x){
        left++;
        right--;
        count++;
    } else if(sum < x){
        left++;
    } else{
        right--;
    }
}
console.log(count);