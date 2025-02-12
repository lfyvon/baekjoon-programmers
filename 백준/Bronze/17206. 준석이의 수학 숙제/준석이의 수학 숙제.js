const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const N = input[1].split(" ").map(Number);
const arr = new Array(80001).fill(0);
let sum = 0;
const result = [];

for(let i = 3; i <= 80000; i++){
    if(i % 3 === 0 || i % 7 === 0){
        sum += i;
    }
    arr[i] = sum;
}

for(let i = 0; i < T; i++){
    result.push(arr[N[i]]);
}

console.log(result.join("\n"));