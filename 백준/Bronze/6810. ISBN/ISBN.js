const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));
const ISBN = "9780921418".split('').map(el => parseInt(el));
let result = 0;

for(let i = 0; i < ISBN.length; i++){
    if(i % 2 === 0){
        result += ISBN[i] * 1;
    } else{
        result += ISBN[i] * 3;
    }
}

for(let i = input.length - 3; i < input.length; i++){
    if(i % 2 === 0){
        result += input[i] * 1;
    } else{
        result += input[i] * 3;
    }
}

console.log(`The 1-3-sum is ${result}`);