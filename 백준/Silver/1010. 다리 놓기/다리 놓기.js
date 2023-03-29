const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
const result = [];
for(let k = 1; k <= t; k++){
    let num = 1;
    let [n, m] = input[k].split(' ').map(Number);
    for(let i = 0; i < n; i++){
        num *= m - i;
        num /= 1 + i
    }
    result.push(num);
}
console.log(result.join('\n'));