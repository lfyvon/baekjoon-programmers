const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const location = input.slice(1).map(el => el.split(' ').map(Number));
const paper = Array.from(Array(100), () => Array(100).fill(0));
let result = 0;
for(let k = 0; k < n; k++){
    const [x, y] = location[k];
    for(let i = x; i < x + 10; i++){
        for(let j = y; j < y + 10; j++){
            paper[i][j] = 1;
        }
    } 
}

for(let i = 0; i < 100; i++){
    for(let j = 0; j < 100; j++){
        result += paper[i][j];
    }
}

console.log(result);