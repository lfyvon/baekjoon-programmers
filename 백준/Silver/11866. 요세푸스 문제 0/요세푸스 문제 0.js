let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x => parseInt(x));
const result = [];

const arr = Array.from(new Array(input[0]), (x, i) => i + 1);
let k = input[1];
while(arr.length !== 0){
    for(let i = 0; i < k - 1; i++){
        arr.push(arr.shift());
    }
    result.push(arr.shift());
}

console.log('<' + result.join(', ') + '>');