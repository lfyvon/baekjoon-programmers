const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(el => parseInt(el));
const arr = input[1].split(' ').map(el => parseInt(el)).sort((a, b) => a - b);
let result = 0;
let min = 0;
let max = arr[n - 1];

while(min <= max){
    let mid = Math.floor((max + min) / 2);
    let sum = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] - mid > 0){
            sum += arr[i] - mid;
        }
    }

    if(sum >= m){
        if(result < mid) result = mid;
        if(sum === m) break;
        min = mid + 1;    
    } else{
        max = mid - 1;
    }
}

console.log(result);