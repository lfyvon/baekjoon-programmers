const l = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number).sort((a, b) => a - b);
const len = l.length;
let count = 0;
for(let i = 0; i < len; i++){
    for(let j = i + 1; j < len; j++){
        for(let k = j + 1; k < len; k++){
            if(l[k] < l[i] + l[j]) count++;
        }
    }
}
console.log(count);