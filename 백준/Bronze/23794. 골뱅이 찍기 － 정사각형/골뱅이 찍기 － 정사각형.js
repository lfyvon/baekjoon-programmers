const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const result = [];
for(let i = 1; i <= n + 2; i++){
    if(i === 1 || i === n + 2) result.push('@'.repeat(n + 2));
    else result.push('@' + ' '.repeat(n) + "@");
}
console.log(result.join('\n'));