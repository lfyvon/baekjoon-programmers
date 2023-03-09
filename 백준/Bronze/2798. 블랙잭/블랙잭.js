let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const NM = input[0].split(' ').map(el => parseInt(el));
const N = NM[0];
const M = NM[1];
const cards = input[1].split(' ').map(el => parseInt(el));
let result = [];

cards.sort(function(a, b){
    return a - b;
});

for(let i = 0; i < N - 2; i++){
    let sum = cards[i];
    for(let j = i + 1; j < N - 1; j++){
        sum = cards[i] + cards[j];
        if (sum >= M){
            break;
        }
        for(let k = i + 2; k < N; k++){
            sum = cards[i] + cards[j] + cards[k];
            if (sum > M){
                break;
            }else {
                result.push(sum);
            }
        }
        if(sum === M){
            break;
        }
    }
    if(sum === M){
        break;
    }
}
result.sort(function(a ,b) {
    return b - a;
});
console.log(result[0]);