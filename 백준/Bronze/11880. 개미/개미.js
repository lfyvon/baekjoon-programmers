const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    const [a, b, c] = input[i].split(' ').map(Number).sort((a, b) => a - b);
    result.push((a + b) ** 2 + c ** 2);
}
console.log(result.join('\n'));