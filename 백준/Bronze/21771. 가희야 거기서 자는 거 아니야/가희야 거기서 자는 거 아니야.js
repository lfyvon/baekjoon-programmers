const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const [R, C] = input[0].split(" ").map(Number);
const [Rg, Cg, Rp, Cp] = input[1].split(" ").map(Number);
let count = 0;
for(let i = 2; i < R + 2; i++){
    for(let j = 0; j < C; j++){
        if(input[i][j] === "P") count++;
    }
}
console.log(Rp * Cp === count ? 0 : 1);