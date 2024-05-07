const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let result = 0;
for(let i = 1; i <= N; i++){
    const c1 = input[i].trim();
    for(let j = 1; j <= N; j++){
        const c2 = input[j].trim().split("").reverse().join("");
        if(c1 === c2) {
            let len = c1.length;
            result = `${len} ${c1[Math.floor(len / 2)]}`;
        }
    }
    if(result.length) break;
}
console.log(result)