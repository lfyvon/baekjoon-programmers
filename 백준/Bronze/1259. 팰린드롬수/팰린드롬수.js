let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();
let result = [];
for(let i = 0; i < input.length; i++){
    let arr = input[i];
    let rev = input[i].split("").reverse().join("");
    if(Number(arr) === Number(rev)){
        result.push("yes");
    } else {
        result.push("no");
    }
}

console.log(result.join('\n'));