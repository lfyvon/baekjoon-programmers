const [T, ...rounds] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    const prison = new Array(rounds[i] + 1).fill(true);
    for(let j = 2; j <= rounds[i]; j++){
        for(let k = j; k <= rounds[i]; k += j){
            prison[k] = !prison[k];
        }
    }
    result.push(prison.filter(el => el === true).length - 1);
}
console.log(result.join("\n"));