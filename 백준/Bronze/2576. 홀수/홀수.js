const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < 7; i++){
    if(input[i] % 2 === 1) result.push(input[i]);
}
if(result.length){
    console.log(result.reduce((a, b) => a + b, 0));
    console.log(Math.min(...result));
} else{
    console.log(-1);
}