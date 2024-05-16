let N = require('fs').readFileSync('/dev/stdin').toString().trim();
let i = 10;
while(true){
    let C = N;
    if(N > i){
        N = Math.round(N / i) * i;
        i *= 10;
    } else{
        break;
    } 
}
console.log(N)