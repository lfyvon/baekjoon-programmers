const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let countA = 0, countB = 0;
let i = 0;
while(input[i]){
    if(input[i] === 'A') countA += Number(input[i + 1]);
    if(input[i] === 'B') countB += Number(input[i + 1]);
    i += 2;
}
console.log(countA > countB ? "A" : "B");