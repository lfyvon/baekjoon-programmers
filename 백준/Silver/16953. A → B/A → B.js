let [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let result = 0;
while(a < b){
    if(b % 2 === 0){
        b /= 2;
    } else{
        if(b % 10 === 1){
            b = Math.floor(b / 10);
        } else{
            result = -1;
            break
        }
    }
    result++;
}

console.log(a === b ? result + 1 : -1);