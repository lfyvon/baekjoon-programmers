const [N, P] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const nums = [];
let X = N;
while(true){
    X = (X * N) % P;
    if(nums.includes(X)){
        console.log(nums.length - nums.indexOf(X));
        break;
    }
    nums.push(X);
}