const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const video = input.slice(1).map(el => el.trim().split('').map(v => parseInt(v)));
let result = '';

function recursion(x, y, n){
    let count = 0;
    for(let i = x; i < x + n; i++){
        for(let j = y; j < y + n; j++){
            if(video[i][j]) count++;
        }
    }
    
    if(count === 0){
        result += '0';
    } else if(count === n * n){
        result += '1';
    } else{
        result += '(';
        recursion(x, y, n / 2);
        recursion(x, y + n / 2, n / 2);
        recursion(x + n / 2, y, n / 2);
        recursion(x + n / 2, y + n / 2, n / 2);
        result += ')';
    }
}

recursion(0, 0, n);

console.log(result);