const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [k, n] = input[0].split(' ').map(el => parseInt(el));
let lanline = input.slice(1).map(el => parseInt(el)).sort((a, b) => a - b);
let min = 0;
let max = lanline[k - 1];
let result = 0;

while(min <= max){
    let mid = Math.floor((min + max) / 2);
    let count = lanline.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);
    if(count >= n){
        if(mid > result) result = mid;
        min = mid + 1;
    } else{
        max = mid - 1;
    }
}
console.log(result);