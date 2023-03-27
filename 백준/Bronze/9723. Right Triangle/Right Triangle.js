const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
let result = "";
for(let i = 1; i <= t; i++){
    const [a, b, c] = input[i].split(' ').map(Number).sort((a, b) => a - b);
    result += `Case #${i}: `;
    c ** 2 === a ** 2 + b ** 2 ? result += 'YES\n' : result += 'NO\n';
}
console.log(result.trim());