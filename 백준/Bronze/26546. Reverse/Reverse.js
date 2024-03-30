const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    let [str, x, y]= input[i].split(" ");
    x = Number(x);
    y = Number(y);
    str = str.slice(0, x) + str.slice(y);
    result.push(str);
}
console.log(result.join("\n"));