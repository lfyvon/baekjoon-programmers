const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let sum = 0;
let i = 1;
while(true){
    sum += i++;
    if(sum > n) break;
}
console.log(i - 2);