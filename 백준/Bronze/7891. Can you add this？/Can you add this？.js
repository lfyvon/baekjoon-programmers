const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    const [x, y] = input[i].split(' ').map(Number);
    result.push(x + y);
}
console.log(result.join('\n'));