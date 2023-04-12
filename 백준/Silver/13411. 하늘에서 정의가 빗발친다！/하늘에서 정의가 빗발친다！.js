const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    const [x, y, s] = input[i].split(' ').map(Number);
    result.push([Math.sqrt(x ** 2 + y ** 2) / s, i]);
}
result.sort((a, b) => a[0] - b[0]);
console.log(result.map(el => el[1]).join('\n'));