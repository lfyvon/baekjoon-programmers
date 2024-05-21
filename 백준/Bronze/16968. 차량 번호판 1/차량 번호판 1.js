const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const dLen = 10;
const cLen = 26;
let count = 0;
let result = 1;
for(let i = 0; i < input.length; i++){
    if(i > 0 && input[i - 1] === input[i]){
        count = 1;
    } else{
        count = 0;
    }
    if(input[i] === "d"){   
        if(count === 1) result *= dLen - 1;
        else result *= dLen;
    } else{
        if(count === 1) result *= cLen - 1;
        else result *= cLen;
    }
}
console.log(result);