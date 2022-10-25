const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));

let arr = Array.from({length: 31}, () => 0);
let result = [];

for(let i = 0; i < 28; i++){
    arr[input[i]] = 1;
}

for(let i = 1; i < 31; i++){
    if(arr[i] === 0) result.push(i);
}
console.log(result.join('\n'));