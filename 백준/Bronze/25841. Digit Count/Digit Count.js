const [A, B, digit] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let count = 0;
for(let i = A; i <= B; i++){
    let num = i.toString().split("").map(Number);
    for(let j = 0; j < num.length; j++){
        if(num[j] === digit) count++;
    }
}
console.log(count);