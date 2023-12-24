const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const map = new Map();
let avg = input.reduce((a, b) => a + b, 0) / 10;
for(let i = 0; i < 10; i++){
    if(map.has(input[i])){
        map.set(input[i], map.get(input[i]) + 1);
    } else{
        map.set(input[i], 1);
    }
}
const mod = [...map].sort((a, b) => b[1] - a[1])[0][0];
console.log(avg);
console.log(mod);