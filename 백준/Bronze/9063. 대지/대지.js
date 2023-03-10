const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const x = [];
const y = [];
for(let i = 1; i <= n; i++){
    const [a, b] = input[i].split(' ').map(Number);
    x.push(a);
    y.push(b);
}
console.log((Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y)));