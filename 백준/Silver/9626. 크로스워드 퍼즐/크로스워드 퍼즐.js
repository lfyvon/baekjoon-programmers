const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input[0].split(" ").map(Number);
const [U, L, R, D] = input[1].split(" ").map(Number);
const puzzle = input.slice(2).map(el => el.trim());
const result = [];
for(let i = 0; i < M + U + D; i++){
    let str = "";
    for(let j = 0; j < N + L + R; j++){
        if(i >= U && j >= L && j + 1 <= N + L && i < M + U){
            str += puzzle[i - U][j - L];
        }else if((i + j) % 2 === 0){
            str += "#";
        } else{
            str += ".";
        }
    }
    result.push(str);
}
console.log(result.join("\n"));