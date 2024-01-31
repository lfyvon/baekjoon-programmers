const [N, P] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = P;
if(N >= 20){
    result = Math.min(result, P / 4 * 3);
}
if(N >= 15){
    result = Math.min(result, P - 2000);
}
if(N >= 10){
    result = Math.min(result, P / 10 * 9);
}
if(N >= 5){
    result = Math.min(result, P - 500);
}
console.log(result < 0 ? 0 : result);