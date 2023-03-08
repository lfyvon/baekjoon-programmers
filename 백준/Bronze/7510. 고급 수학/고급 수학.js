const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    const [a, b, c] = input[i].split(' ').map(Number).sort((a, b) => a - b);
    result.push(`Scenario #${i}:`);
    if(a ** 2 + b ** 2 === c ** 2) result.push('yes\n');
    else result.push('no\n');
}
console.log(result.join('\n').trim());