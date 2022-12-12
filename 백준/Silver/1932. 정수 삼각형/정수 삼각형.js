const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const tri = input.slice(1).map(el => el.split(' ').map(v => parseInt(v)));

for(let i = n - 2; i >= 0; i--){
    for(let j = 0; j < tri[i].length; j++){
        tri[i][j] += Math.max(tri[i + 1][j], tri[i + 1][j + 1]);
    }
}

console.log(tri[0][0]);