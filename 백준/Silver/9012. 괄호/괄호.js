let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = parseInt(input[0]);
let result = [];
for(let i = 1; i <= num; i++){
    let str = input[i];
    let count = 0;
    for(let j = 0; j < str.length; j++){
        if(count<0){
            break;
        } else{
            if(str[j] === '('){
                count++;
            } else{
                count--;
            }
        }
    }
    if(count === 0){
        result.push('YES');
    } else{
        result.push('NO');
    }
}
console.log(result.join('\n'));