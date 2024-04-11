const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
for(let i = 0; i < 4; i++){
    let [a, b] = input[i].split(" ");
    count += a === "Es" ? +b * 21 : +b * 17;
}
console.log(count);