const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = parseInt(input[0]);
const coordinate = input.slice(1);
let result = [];
for(let i = 0; i < t; i++){
    const [x1, y1, r1, x2, y2, r2] = coordinate[i].split(" ").map(Number);
    const d = Math.sqrt(((x1 - x2) ** 2 + (y1 - y2) ** 2), 2);
    if(d === 0 && r1 === r2){
        result.push(-1);
    } else if(d > r1 + r2 || d + r1 < r2 || d + r2 < r1){
        result.push(0);
    } else if(d === r1 + r2 || d + r1 === r2 || d + r2 === r1){
        result.push(1);
    } else{
        result.push(2);
    }
}

console.log(result.join('\n'));