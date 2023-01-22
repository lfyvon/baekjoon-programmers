const [a, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;
for(let i = 1; i < 10001; i++){
    if(a * i % m === 1){
        result = i;
        break;
    }
}
console.log(result);