const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => parseInt(el)).sort((a, b) => a - b);

let set = [...new Set(input)];
let result = 0;

if(set.length === 1){
    result = 10000 + input[0] * 1000;
} else if(set.length === 2){
    result = 1000 + input[1] * 100;
} else{
    result = input[2] * 100;
}

console.log(result);