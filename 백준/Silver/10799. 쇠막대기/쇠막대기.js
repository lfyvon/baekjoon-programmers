const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const stack = [];
let result = 0;
for(let i in input){
    if(input[i] === "("){
        stack.push(input[i]);
    } else {
        if(input[i - 1] === '('){
            stack.pop();
            result += stack.length;
        }else{
            stack.pop();
            result++;
        }
    }
}
console.log(result)