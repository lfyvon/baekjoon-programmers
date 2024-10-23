const [T, ...d] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    for(let j = 0; j <= d[i]; j++){
        if(j + j ** 2 > d[i]){
            result.push(j - 1);
            break;
        }
    }
}
console.log(result.join("\n"));