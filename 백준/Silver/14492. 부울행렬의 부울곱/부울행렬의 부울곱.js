const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const N =input[0][0];
let count = 0;
for(let i = 1; i <= N; i++){
    for(let j = 0; j < N; j++){
        for(let k = 0; k < N; k++){
            if(input[i][k] && input[N + k + 1][j]){
                count += 1;
                break;
            }
        }
        
    }
}
console.log(count);