const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let n = parseInt(input);
let result = 0;

while(true){
    if(n % 5 === 0){
        result += n / 5;
        break;
    } else if(n < 0){
        result = -1;
        break;
    }
    n -= 3;
    result++;
}

console.log(result);