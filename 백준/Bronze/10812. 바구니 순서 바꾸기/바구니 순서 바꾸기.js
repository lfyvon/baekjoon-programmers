const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let arr = Array(n).fill().map((_, i) => i + 1);
for(let x = 1; x <= m; x++){
    const [i, j, k] = input[x].split(' ').map(Number);
    arr = [...arr.slice(0, i - 1), ...arr.slice(k - 1, j), ...arr.slice(i - 1, k - 1), ...arr.slice(j)];
}
console.log(arr.join(' '));