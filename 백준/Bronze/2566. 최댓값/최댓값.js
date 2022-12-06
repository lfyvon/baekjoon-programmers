const grid = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(v => parseInt(v)));
let max = 0;
let maxX = 1;
let maxY = 1;
let result = 0;
for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
        if(grid[i][j] > max){
            max = grid[i][j];
            maxX = i + 1;
            maxY = j + 1;
        }
    }
}

console.log(max);
console.log(`${maxX} ${maxY}`);