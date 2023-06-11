const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    let str = input[i].trim().split(' ');
    for(let j = 0; j < str.length; j++){
        str[j] = str[j].split('').reverse().join("");
    }
    result.push(str.join(' '));
}
console.log(result.join('\n'));