const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let result = "";
let i = 0;
while(input[i] !== 'END'){
    result += input[i].split('').reverse().join('') + "\n";
    i++;
}
console.log(result.trim());