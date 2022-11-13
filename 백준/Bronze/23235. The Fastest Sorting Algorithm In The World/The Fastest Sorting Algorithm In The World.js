const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for(let i = 1; i < input.length; i++){
    result.push('Case ' + i + ': Sorting... done!');
}

console.log(result.join('\n'));