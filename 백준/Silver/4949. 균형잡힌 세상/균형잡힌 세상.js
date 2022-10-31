const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
let result = [];

for(let i = 0; i < input.length; i++){
    let str = input[i].replace(' ', '').split('');
    let brakets = [];
    let balance = "yes"
    let check = ""
    for(let j = 0; j < str.length; j++){
        if(str[j] === '(' || str[j] === '['){
            brakets.push(str[j]);
        } else if(str[j] === ')'){
            check = brakets.pop();
            if(check !== '('){
                brakets.push(str[j]);
            }
        } else if(str[j] === ']'){
            check = brakets.pop();
            if(check !== '['){
                brakets.push(str[j]);
            }
        }
    }
    if(brakets.length > 0) balance = "no"
    result.push(balance)
}

console.log(result.join('\n'));