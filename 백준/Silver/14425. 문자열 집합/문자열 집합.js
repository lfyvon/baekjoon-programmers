const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
const [n, m] = input[0].split(' ').map(Number);
const set = new Set(input.slice(1, n + 1));
let count = 0;
for(let i = n + 1; i <= n + m; i++){
    if(set.has(input[i])) count++;
}
console.log(count);