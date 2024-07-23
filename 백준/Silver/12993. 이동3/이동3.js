let [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => b - a);
let num = 0;
let result = 0;
while(3 ** num <= x){
    num++;
}
if(x === 0 && y === 0 && num === 0) result = 1;

while(true){
    num--;
    let max = Math.max(x, y);
    let min = Math.min(x, y);
    max -= 3 ** num;
    [x, y] = [max, min];
    if((x <= 0 && y <= 0) || num <= 0){
        if(x === 0 && y === 0 && num === 0){
            result = 1;
        }
        break;
    }
}
console.log(result);