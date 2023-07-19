const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);
let index = 0;
let sum = 0;
let count = 0;
for(let i = 0; i < n; i++){
    if(sum < m){
        sum += a[i];
    }

    while(sum >= m){
        if(sum === m){
            count++;
        }
        sum -= a[index];
        index++;
    }
}
console.log(count);