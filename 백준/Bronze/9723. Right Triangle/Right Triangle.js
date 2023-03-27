const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    const [a, b, c] = input[i].split(' ').map(Number).sort((a, b) => a - b);
    let str = `Case #${i}: `;
    result.push(c ** 2 === a ** 2 + b ** 2 ? str += 'YES' : str += 'NO');
}
console.log(result.join('\n'));