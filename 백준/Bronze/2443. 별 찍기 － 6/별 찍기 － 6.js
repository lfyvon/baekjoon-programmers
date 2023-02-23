const N = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const result = [];
for(let i = N; i > 0; i--){
    result.push(' '.repeat(N - i) + '*'.repeat(i * 2 - 1));
}
console.log(result.join('\n'));