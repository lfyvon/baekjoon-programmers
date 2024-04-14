const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const chess = {
    'K' : 0, 
    'P' : 1, 
    'N' : 3, 
    'B' : 3, 
    'R' : 5, 
    'Q' : 9};
let count = 0;
for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
        let c = input[i][j];
        if(c === '.') continue;
        if(chess[c]) count += chess[c];
        else count -= chess[c.toUpperCase()];
    }
}
console.log(count);