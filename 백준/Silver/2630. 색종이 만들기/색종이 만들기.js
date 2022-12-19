let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);
const paper = input.slice(1).map(el => el.split(" ").map(v => parseInt(v)));
let white = 0;
let blue = 0;

const recursion = (x, y, n) => {
    let count = 0;
    for(let i = x; i < x + n; i++){
        for(let j = y; j < y + n; j++){
            count += paper[i][j];
        }
    }
    if(count === 0){
        white++;
    } else if(count === n * n){
        blue++;
    } else {
        recursion(x, y, n / 2);
        recursion(x, y + n / 2, n / 2);
        recursion(x + n / 2, y, n / 2);
        recursion(x + n / 2, y + n / 2, n / 2);
    }
}

recursion(0, 0, num);
console.log(white + '\n' + blue);