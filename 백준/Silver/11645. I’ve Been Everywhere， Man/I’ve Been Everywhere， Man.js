const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
let i = 0;
let j = 1;
const result = [];
while(i < t){
    const n = Number(input[j++]);
    const set = new Set();
    for(let k = j; k < j + n; k++){
        set.add(input[k].trim());
    }
    result.push(set.size);
    j += n;
    i++;
}
console.log(result.join("\n"));