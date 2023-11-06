const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const cow = input.slice(1).map(el => el.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);
let count = cow[0][0] + cow[0][1];
for(let i = 1; i < n; i++){
    if(cow[i][0] > count) count += cow[i][0] - count;
    count += cow[i][1];
}
console.log(count);