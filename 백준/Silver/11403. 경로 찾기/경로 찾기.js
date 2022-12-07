const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(v => parseInt(v)));

const N = input[0];
const G = input.slice(1);
let result = '';
for(let k = 0; k < N; k++){
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(G[i][k] && G[k][j]){
                G[i][j] = 1;
            }
        }
    }
}

for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        result += G[i][j] + ' '
    }
    result.trim();
    result += '\n'
}

console.log(result.trim());