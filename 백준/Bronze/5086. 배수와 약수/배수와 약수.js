const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
let i = 0;
const result = [];
while(true){
    const [a, b] = input[i];
    if(a === 0 && b === 0) break;
    if(b % a === 0) result.push('factor');
    else if(a % b === 0) result.push('multiple');
    else result.push('neither');
    i++;
}
console.log(result.join('\n'));