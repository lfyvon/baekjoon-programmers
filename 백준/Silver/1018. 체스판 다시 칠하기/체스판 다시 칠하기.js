let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = input.shift().split(' ').map(el => parseInt(el))
const [x, y] = [8, 8]
let min = x * y;
function countRepaint(row, col, startColor){
    let count = 0;
    for(let i = row; i < row + x; i++){
        for(let j = col; j < col + y; j++){
            if(((row+col) % 2) === ((i+j) % 2)){
                if(input[i][j] !== startColor){
                    count++;
                }
            } else{
                if(input[i][j] === startColor){
                    count++;
                }
            }
        }
    }
    return count;
}

for(let i = 0; i <= m - x; i++){
    let startColor = input[i][0];
    for(let j = 0; j <= n - y; j++){
        let blackCount = countRepaint(i, j, 'B');
        let whiteCount = countRepaint(i, j, 'W');
        let count = blackCount > whiteCount ? whiteCount : blackCount
        if(count < min){
            min = count;
        }
    }
}
console.log(min);