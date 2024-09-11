const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N, X] = input[0];
let bus = input[1][0];
let min = Infinity;
let sum = 0;
for(let i = 1; i <= N; i++){
    const [S, T] = input[i];
    if(X - S - T >= 0 && X - S - T < min){
        bus = S;
        min = X - S - T;
        sum = S + T;
    }
}
if(sum > X || min > X) bus = -1;
console.log(bus);