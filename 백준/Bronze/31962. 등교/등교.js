const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N, X] = input[0];
let result = -1;
for(let i = 1; i <= N; i++){
    const [S, T] = input[i];
    if(X - S - T >= 0 && S > result){
        result = S;
    }
}
console.log(result);