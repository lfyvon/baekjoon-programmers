const [k, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));

let result = [];

for(let i = 0; i < k; i++){
    if(arr[i] === 0){
        result.pop();
    } else{
        result.push(arr[i]);
    }
}

console.log(result.reduce((pre, cur) => pre + cur, 0));