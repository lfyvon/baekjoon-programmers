const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const M = Number(input[0]);
const map = new Map();
const result = [];
for(let i = 1; i <= M; i++){
    const [op, x, w] = input[i].split(" ");
    if(op === "1"){
        map.set(w, x);
    } else {
        result.push(map.get(x));
    } 
}
console.log(result.join("\n"));