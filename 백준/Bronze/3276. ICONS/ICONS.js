const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let a = 1;
let b = 1;
while(a * b < N){
    if(a > b) b++;
    else a++;
}
console.log(a + " " + b);