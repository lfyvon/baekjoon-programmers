const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const scores = input.slice(1).map(el => el.split(" ").map(v => Number(v)));
const result = new Array(N).fill(0);

for(let i = 0; i < 3; i++){
    for(let j = 0; j < N; j++){
        let check = true;
        for(let k = 0; k < N; k++){
            if(j !== k && scores[j][i] === scores[k][i]){
                check = false;
                break;
            };
        }
        if(check) result[j] += scores[j][i];
    }
}

console.log(result.join("\n"));