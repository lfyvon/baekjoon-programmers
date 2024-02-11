const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const student = input.map(el => el.split(" ").map(Number));
const check = Array.from(Array(N), () => new Array(5).fill(0));
let count = new Array(N).fill(0);
for(let i = 0; i < 5; i++){
    for(let j = 0; j < N; j++){
        for(let k = j + 1; k < N; k++){
            if(student[j][i] === student[k][i]){
                check[k][j] = 1;
                check[j][k] = 1;
            }
        }
    }
}

for(let i = 0; i < N; i++){
    count[i] = check[i].filter(el => el === 1).length;
}

console.log(count.indexOf(Math.max(...count)) + 1);