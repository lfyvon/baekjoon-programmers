let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));

let stack = [];
let result = [];
let count = 1;

for(let i = 0; i < n; i++){
    for(let j = count; j <= arr[i]; j++){
        stack.push(j);
        result.push('+');
    }
    if(stack[stack.length - 1] === arr[i]){
        stack.pop();
        result.push('-');
        if(count <= arr[i]){
            count = arr[i] + 1;
        }
    } else {
        result = ['NO'];
        break;
    }
}

console.log(result.join('\n'));