const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    let str = input[i][0];
    for(let j = 1; j < input[i].length; j++){
        if(str[str.length - 1] !== input[i][j]) str += input[i][j];
    }
    result.push(str);
}
console.log(result.join("\n"));