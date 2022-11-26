const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const video = input.slice(1).map(el => el.trim().split('').map(v => parseInt(v)));
const result = [];

function recursion(x, y, n){
    let count = 0;
    for(let i = x; i < x + n; i++){
        for(let j = y; j < y + n; j++){
            if(video[i][j]) count++;
        }
    }

    if(count === 0){
        result.push(0);
    } else if(count === n * n){
        result.push(1);
    } else{
        result.push('(');
        recursion(x, y, n / 2);
        recursion(x, y + n / 2, n / 2);
        recursion(x + n / 2, y, n / 2);
        recursion(x + n / 2, y + n / 2, n / 2);
        result.push(')');
    }
}

recursion(0, 0, n);

console.log(result.join(''));