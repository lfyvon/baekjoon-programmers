const n = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = [];
for(let i = 1; i <= n; i++){
    result.push(' '.repeat(n - i) + '* '.repeat(i));
}
console.log(result.join('\n'));