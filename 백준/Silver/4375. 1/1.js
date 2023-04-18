const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < input.length; i++){
    const n = input[i];
    let mul = 1;
    let count = 1;
    while(true){
        if(mul % n === 0) break;
        mul = (mul * 10 + 1) % n;
        count++;
    }
    result.push(count);
}
console.log(result.join('\n'));