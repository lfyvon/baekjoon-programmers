const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const list = input[1];
let result = [0, 0];
for(let i = 0; i < N; i++){
    if(list[i] === 'E'){
        result[0]++;
    } else if(list[i] === 'W'){
        result[0]--;
    } else if(list[i] === 'N'){
        result[1]++;
    } else{
        result[1]--;
    }
}
console.log(Math.abs(result[0]) + Math.abs(result[1]));