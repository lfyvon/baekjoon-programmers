const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];
for(let i = 0; i < input.length; i++){
    let str = input[i].split("");
    for(let j = 0; j < str.length; j++){
        if(str[j] === 'i') str[j] = 'e';
        else if(str[j] === 'e') str[j] = 'i';
        else if(str[j] === 'I') str[j] = 'E';
        else if(str[j] === 'E') str[j] = 'I';
    }
    result.push(str.join(""));
}
console.log(result.join("\n"));