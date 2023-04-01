const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const result = [];
for(let i = 0; i < n; i++){
    result.push('SciComLove');
}
console.log(result.join('\n'));