let N = Number(require('fs').readFileSync('/dev/stdin').toString());
let count = 1;
let result = 0;
while(N){
    if(N < count) count = 1;
    N -= count++;
    result++;
}
console.log(result);