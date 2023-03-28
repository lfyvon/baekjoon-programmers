const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    if(input[i].trim() === 'P=NP'){
        result.push('skipped');
    } else {
        const [a, b] = input[i].split('+').map(Number);
        result.push(a + b);
    }
}
console.log(result.join('\n'));