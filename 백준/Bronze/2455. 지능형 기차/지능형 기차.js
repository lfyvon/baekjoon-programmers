const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
let count = 0;
let max = 0;
for(let i = 0; i < 4; i++){
    const [out, board] = input[i];
    count += board - out;
    max = Math.max(count, max);
}
console.log(max);