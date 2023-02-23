const N = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const result = [];
for(let i = 0; i < N; i++){
    result.push(' '.repeat(N - 1 - i) + '*'.repeat(i * 2 + 1));
}
for(let i = N - 1; i > 0; i--){
    result.push(' '.repeat(N - i) + '*'.repeat(i * 2 - 1));
}
console.log(result.join('\n'));