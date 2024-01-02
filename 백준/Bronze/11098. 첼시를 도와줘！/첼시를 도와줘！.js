const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let i = 0;
let j = 1;
const result = [];
while(i < n){
    const p = Number(input[j++]);
    const arr = input.slice(j, j + p).map(el => el.trim().split(" ")).sort((a, b) => +b[0] - +a[0]);
    result.push(arr[0][1]);
    j += p;
    i++;
}
console.log(result.join("\n"));