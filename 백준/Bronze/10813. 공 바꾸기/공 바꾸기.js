const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = Array(n).fill().map((_, i) => i + 1);
for(let x = 1; x <= m; x++){
    const [i, j] = input[x].split(' ').map(el => Number(el) - 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(arr.join(' '));