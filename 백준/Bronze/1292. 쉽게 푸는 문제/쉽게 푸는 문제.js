const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let count = 1;
let num = 1;
let sum = 0;
for(let i = 1; i <= b; i++){
    if(i >= a){
        sum += num;
    }
    if(count < num){
        count++;
    } else{
        num++;
        count = 1;
    }
}
console.log(sum)