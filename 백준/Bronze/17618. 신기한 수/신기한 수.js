const n = Number(require('fs').readFileSync('/dev/stdin').toString());
let count = 0;
for(let i = 1; i <= n; i++){
    let sum = i.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    if(!(i % sum)) count++;
}
console.log(count);