const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const map = new Map();
let count = input.length;
for(let i = 0; i < count; i++){
    if(map.has(input[i])){
        map.set(input[i], map.get(input[i]) + 1);
    } else{
        map.set(input[i], 1);
    }
}
let result = [...map].sort().map(el => [el[0], (el[1] * 100 / count ).toFixed(4)]);

console.log(result.map(el => el.join(" ")).join("\n"));