const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let result = [];

for(let i = 0; i < input.length; i++){
    if(input[i] === input[i].toLowerCase()){
        result.push(input[i].toUpperCase());
    }else{
        result.push(input[i].toLowerCase());
    }
}

console.log(result.join(''));