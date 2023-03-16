const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
const n = input.length;
let max = 0;
let result = "";
for(let i = 0; i < n; i++){
    if(max < input[i].length) max = input[i].length;
}
for(let i = 0; i < max; i++){
    for(let j = 0; j < n; j++){
        if(input[j][i] !== undefined){
            result += input[j][i];
        }
    }
}
console.log(result);