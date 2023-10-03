const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const MAX_NUM = 101;
const area = Array.from(Array(MAX_NUM), () => Array(MAX_NUM).fill(0));
let result = 0;
for(let i = 0; i < 4; i++){
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    for(let x = x1; x < x2; x++){
        for(let y = y1; y < y2; y++){
            if(!area[x][y]){
                area[x][y] = 1;
                result++;
            }
        }
    }
}
console.log(result);