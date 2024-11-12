const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let count = 0;

for(let i = 0; i < input.length; i++){
    if(input[i] === '0') count++;
}

for(let i = input.length - 1; i >= 0; i--){
    if(input[i] === '0') count--;
    else break;
}
console.log(count);