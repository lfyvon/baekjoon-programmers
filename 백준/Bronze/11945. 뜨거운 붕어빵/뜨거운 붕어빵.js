const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let result = [];
for(let i = 1; i <= n; i++){
    result.push(input[i].split('').reverse().join(''));
}
console.log(result.join('\n'));