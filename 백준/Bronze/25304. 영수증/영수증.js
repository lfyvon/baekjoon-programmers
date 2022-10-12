const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const x = parseInt(input[0]);
const n = parseInt(input[1]);
let totalPrice = 0;
let result = "Yes";
for(let i = 2; i < n + 2; i++){
    const [a, b] = input[i].split(' ').map(el => parseInt(el));
    totalPrice += a * b;
}

if(x !== totalPrice){
    result = "No";
}

console.log(result);