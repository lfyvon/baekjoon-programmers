const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let max = 0;
let result = 0;
for(let i = 0; i < 5; i++){
    const sum = input[i].split(' ').map(Number).reduce((a, b) => a + b, 0);
    if(sum > max){
        max = sum;
        result = `${i + 1} ${sum}`;        
    }
}
console.log(result);