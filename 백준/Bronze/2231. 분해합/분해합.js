let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
let start= N - input.length*9;
let result = 0;
if(start < 0) {
    start = 0;
}
let M = start;
for(let i = start; i < input; i++){
    let sum = M;
    for(let j = 0; j < +String(M).length; j++){
        sum = sum + Number(String(M).charAt(j));
    }
    if(sum === N){
        result = M;
        break;
    }
    if(M >= N){
        result = 0;
        break;
    }
    
    M++;
}
console.log(result);