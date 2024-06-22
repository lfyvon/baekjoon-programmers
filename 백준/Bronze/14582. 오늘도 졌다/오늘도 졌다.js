const [J, S] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
let jWin = J[0] ? true : false;
for(let i = 0; i < 9; i++){
    if(J[i] > S[i]) jWin = true;
}
console.log(jWin ? "Yes" : "No");