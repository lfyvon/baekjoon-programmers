const [str, explosion] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
const strLen = str.length;
const exLen = explosion.length;
const stack = [];

for(let i = 0; i < strLen; i++){
    if(explosion[exLen - 1] === str[i]){
        let flag = true;
        for(let j = 1; j < exLen; j++){
            if(explosion[exLen - 1 - j] !== stack[stack.length - j]){
                flag = false;
                stack.push(str[i]);
                break;
            }
        }
        if(flag){
            let count = exLen - 1;
            while(count){
                stack.pop();
                count--;
            }
        }
    } else{
        stack.push(str[i]);
    }
}
console.log(stack.length? stack.join("") : "FRULA");