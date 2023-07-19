const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);
let left = 0;
let right = 0;
let sum = a[left];
let count = 0;
while(left < n && right < n){
    if(sum === m){
        count++;
        sum += a[++right];
    } else if(sum < m){
        sum += a[++right];
    } else{
        sum -= a[left++];
    }
}
console.log(count);