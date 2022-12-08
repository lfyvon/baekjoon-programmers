const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const paper = input.slice(1).map(el => el.split(' ').map(v => parseInt(v)));
let result = [0, 0, 0];
const recursion = (x, y, n) => {
    const stan = paper[x][y];
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(paper[x + i][y + j] === stan) count++;
        }
    }
    if(count === n * n){
        result[stan + 1]++;
    }else{
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                recursion(x + n / 3 * i, y + n / 3 * j, n / 3);
            }
        }
    }
};

recursion(0, 0, n);
console.log(result.join('\n'));