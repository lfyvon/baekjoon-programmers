const input = require('fs').readFileSync('/dev/stdin').toString().split('-');

let num = '';
let result = 0;

for(let i = 0; i < input.length; i++){
    let ex = input[i].split('+').map(el => parseInt(el)).reduce((a, b) => a + b, 0);
    if(i === 0) result += ex;
    else result -= ex;
}

console.log(result);