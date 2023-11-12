const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);
const m = Number(input[1]);
const arrA = input[2].split(" ").map(Number);
let decimal = 0;
const result = [];
for(let i = 0; i < m; i++){
    decimal += arrA[i] * Math.pow(A, m - i - 1);
}
while(decimal){
    result.unshift(decimal % B);
    decimal = Math.floor(decimal / B);
}
console.log(result.length ? result.join(" ") : 0);