const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
const [n, k, x, y] = input[0];
let count = 0;
for(let i = 1; i <= n; i++){
    const [a, b] = input[i];
    const dist = Math.sqrt((a - x) ** 2 + (b - y) ** 2);
    if(dist > k) count++;
}
console.log(count);