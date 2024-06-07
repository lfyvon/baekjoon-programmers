const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
let check = true;
for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        if(input[i][j] !== input[j][i]){
            check = false;
            break;
        }
    }
    if(!check) break;
}
console.log(check ? "YES" : "NO");