const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let max = 0;
let count = 0;
for(let i = 0; i < 10; i++){
    const [up, down] = input[i].split(' ').map(Number);
    count += down - up;
    max = Math.max(count, max);
}
console.log(max);