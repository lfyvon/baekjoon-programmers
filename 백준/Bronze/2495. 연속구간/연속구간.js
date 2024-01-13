const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const n = input.length;
const result = [];
for(let i = 0; i < n; i++){
    let maxCount = 0;
    let count = 1;
    for(let j = 1; j < input[i].length; j++){
        if(input[i][j - 1] === input[i][j]) count++;
        else count = 1;
        maxCount = Math.max(maxCount, count);
    }
    result.push(maxCount);
}
console.log(result.join("\n"));