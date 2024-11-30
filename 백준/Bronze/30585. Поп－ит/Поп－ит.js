const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [h, w] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(el => el.split("").map(Number));
let countZ = 0;
for(let i = 0; i < h; i++){
    for(let j = 0; j < w; j++){
        if(!arr[i][j]) countZ++;
    }
}
console.log(Math.min(h * w - countZ, countZ));