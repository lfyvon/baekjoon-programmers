const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const [M, n] = input[0].split(" ").map(Number);
const dir = [0, 0];
const sign = [1, 1, -1, -1];
let idx = 0;
let check = true;
for(let i = 1; i <= n; i++){
    const [op, d] = input[i].split(" ");
    if(op === "MOVE"){
        dir[idx % 2] += +d * sign[idx];
    }
    if(op === "TURN"){
        if(+d % 2 === 1){
            idx = (idx + 3) % 4;
        } else {
            idx = (idx + 1) % 4;
        }
    }
    if(dir[0] < 0 || dir[1] < 0 || dir[0] >= M || dir[1] >= M){
        check = false;
        break;
    }
}
console.log(check ? dir.join(" ") : -1);
