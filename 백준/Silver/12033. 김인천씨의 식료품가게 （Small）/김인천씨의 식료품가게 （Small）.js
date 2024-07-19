const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
let i = 0;
let idx = 1;
const result = [];
while(i < T){
    const N = Number(input[idx++]);
    const list = input[idx++].split(" ").map(Number);
    const arr = [];
    for(let j = 0; j < N * 2; j++){
        if(arr.length === N) break;
        for(let k = j + 1; k < N * 2; k++){
            if(!list[k]) continue;
            if(list[j] / 3 * 4 === list[k]){
                arr.push(list[j]);
                list[k] = 0;
                break;
            }
        }
    }
    result.push(`Case #${i + 1}: ${arr.join(" ")}`);
    i++;
}
console.log(result.join("\n"));