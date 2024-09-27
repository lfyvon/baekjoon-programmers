const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const count = new Array(N + 1).fill(0);
let result = -1;
for(let i = 0; i < N; i++){
    count[arr[i]]++;
}

for(let i = 0; i <= N; i++){
    if(i === count[i]) result = i;
}
console.log(result);