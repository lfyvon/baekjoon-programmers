const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
let i = 0;
const result = [];
while(true){
    if(input[i][0] === 0) break;
    const [r, w, l] = input[i];
    if(w / 2 * w / 2 + l / 2 * l / 2 <= r * r) result.push(`Pizza ${i + 1} fits on the table.`);
    else result.push(`Pizza ${i + 1} does not fit on the table.`);
    i++;
}
console.log(result.join('\n'));