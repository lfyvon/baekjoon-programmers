const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let i = 0;
const result = [];
while(input[i] !== 0){
    for(let j = 0; j < input[i]; j++){
        result.push("*".repeat(j + 1));
    }
    i++;
}
console.log(result.join("\n"));