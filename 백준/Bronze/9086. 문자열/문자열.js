const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = parseInt(input[0]);
const str = input.slice(1);
let result = [];

for(let i = 0; i < t; i++){
    let s = str[i].trim().split('');
    result.push(s[0] + s[s.length - 1]);
}

console.log(result.join('\n'));