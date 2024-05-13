const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const yd = input[0];
const N = Number(input[1]);
const nameList = input.slice(2).sort();
let max = 0;
let max_idx = 0;

for(let i = 0; i < N; i++){
    const str = nameList[i];
    const L = yd.split("L").length - 1 + nameList[i].split("L").length - 1;
    const O = yd.split("O").length - 1 + nameList[i].split("O").length - 1;
    const V = yd.split("V").length - 1 + nameList[i].split("V").length - 1;
    const E = yd.split("E").length - 1 + nameList[i].split("E").length - 1;
    p = ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;
    if(p > max){
        max = p;
        max_idx = i;
    }
}
console.log(nameList[max_idx]);
