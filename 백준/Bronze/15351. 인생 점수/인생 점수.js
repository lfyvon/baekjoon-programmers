const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    let count = 0;
    for(let j = 0; j < input[i].length; j++){
        const score = input[i][j].charCodeAt() - 64;
        if(score > 0 && score < 65){
            count += score;
        }
    }
    result.push(count === 100 ? "PERFECT LIFE" : count);
}
console.log(result.join("\n"));