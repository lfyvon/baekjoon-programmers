const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let sum = arr.reduce((a, b) => a + b, 0);
let result = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] === sum - arr[i]){
        result = arr[i];
        break;
    }
}
console.log(result);