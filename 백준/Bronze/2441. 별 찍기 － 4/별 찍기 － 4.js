const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let result = [];
for(let i = n; i > 0; i--){
    result.push(' '.repeat(n - i) +'*'.repeat(i));
}
console.log(result.join('\n'));