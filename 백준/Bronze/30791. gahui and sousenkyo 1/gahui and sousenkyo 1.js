const [st, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let count = 0;
for(let i = 0; i < arr.length; i++){
    if(st - arr[i] <= 1000) count++;
}
console.log(count);
