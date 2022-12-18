const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const a = input[1].split(' ').map(el => parseInt(el)).sort((a, b) => a - b);
let result = 1;
for(let i = 0; i < a.length; i++){
    if(result != a[i]){
        break;
    }
    result++;
}

console.log(result);