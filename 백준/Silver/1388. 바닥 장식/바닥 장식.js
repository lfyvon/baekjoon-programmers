const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const [n, m] = input[0].split(' ').map(Number);
const floor = input.slice(1).map(el => el.split(''));
let result = 0;

for(let i = 0; i < n; i++){
    let check = 0;
    for(let j = 0; j < m; j++){
        if(floor[i][j] === '|'){
            check = 0;
        } else if(!check && floor[i][j] === '-'){
            check = 1;
            result++;
        }
    }
}

for(let i = 0; i < m; i++){
    let check = 0;
    for(let j = 0; j < n; j++){
        if(floor[j][i] === '-'){
            check = 0;
        } else if(!check && floor[j][i] === '|'){
            check = 1;
            result++;
        }
    }
}

console.log(result)