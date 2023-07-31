const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const diff = input.reduce((a, b) => a + b, 0) - 100;
for(let i = 0; i < 9; i++){
    for(let j = i + 1; j < 9; j++){
        if(input[i] + input[j] === diff){
            input.splice(j, 1);
            input.splice(i, 1);
        }
    }
}
console.log(input.join("\n"));