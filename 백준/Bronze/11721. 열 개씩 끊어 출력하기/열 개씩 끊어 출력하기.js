const input = require('fs').readFileSync('/dev/stdin').toString();
let result = [];
let str = '';
for(let i = 0; i < input.length; i++){
    str += input[i];
    if(i % 10 === 9 || i === input.length - 1){
        result.push(str);
        str = "";
    }
}
console.log(result.join('\n'));