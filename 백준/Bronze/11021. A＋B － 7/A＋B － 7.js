const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = parseInt(input[0]);
let result = [];

for(let i = 1; i <= t; i++){
    const [a, b] = input[i].split(' ').map(el => parseInt(el));
    result.push("Case #"+ i +": " + (a + b));
}

console.log(result.join('\n'));