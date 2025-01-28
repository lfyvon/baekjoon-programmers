const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const S = [...new Set(input[i].trim().split(""))];
    let count = 2015;
    for(let j = 0; j < S.length; j++){
        count -= S[j].charCodeAt();
    }
    result.push(count);
}
console.log(result.join("\n"));