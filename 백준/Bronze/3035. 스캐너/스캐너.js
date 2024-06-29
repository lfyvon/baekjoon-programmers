const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C, ZR, ZC] = input[0].split(" ").map(Number);
const result = [];
for(let i = 1; i <= R; i++){
    let str = "";
    for(let j = 0; j < C; j++){
        str += input[i][j].repeat(ZC);
    }
    for(let j = 0; j < ZR; j++){
        result.push(str);
    }
}
console.log(result.join("\n"));