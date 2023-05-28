const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
const n = Number(input[0]);
let str = input[1];
for(let i = 2; i <= n; i++){
    for(let j = 0; j < str.length; j++){
        if(str[j] !== input[i][j]){
            str = str.slice(0, j) + "?" + str.slice(j + 1);
        }
    }
}
console.log(str);