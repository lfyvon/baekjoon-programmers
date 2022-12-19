let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);
const paper = input.slice(1).map(el => el.split(" ").map(v => parseInt(v)));
let white = 0;
let blue = 0;

const recursion = (x, y, num) => {
    let count = 0;
    for(let i = x; i < x + num; i++){
        for(let j = y; j < y + num; j++){
            count += paper[i][j];
        }
    }
    if(count === 0){
        white++;
    } else if(count === num * num){
        blue++;
    } else {
        recursion(x, y, num / 2);
        recursion(x, y + num / 2, num / 2);
        recursion(x + num / 2, y, num / 2);
        recursion(x + num / 2, y + num / 2, num / 2);
    }
}

recursion(0, 0, num);
console.log(white + '\n' + blue);