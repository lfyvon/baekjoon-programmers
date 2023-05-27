const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
let i = 0;
const result = [];
while(input[i][0] !== 0 || input[i][1] !== 0){
    const [d, e] = input[i];
    let min = Infinity;
    for(let j = 0; j <= d / 2; j++){
        min = Math.min(min, Math.abs(Math.sqrt(j ** 2 + (d - j) ** 2) - e));
    }
    result.push(min);
    i++;
}
console.log(result.join("\n"));