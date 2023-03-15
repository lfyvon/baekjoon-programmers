const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = Array(n).fill(0);
for(let x = 1; x <= m; x++){
    const [i, j, k] = input[x].split(' ').map(Number);
    for(let y = i - 1; y < j; y++){
        arr[y] = k;
    }
} 
console.log(arr.join(' '));