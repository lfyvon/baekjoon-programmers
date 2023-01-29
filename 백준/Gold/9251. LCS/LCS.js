const [str1, str2] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());

const n = str1.length;
const m = str2.length;
const lcs = Array.from(Array(n + 1), () => Array(m + 1).fill(0))
for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(str1[i] === str2[j]){
            lcs[i + 1][j + 1] = lcs[i][j] + 1;
        } else{
            lcs[i + 1][j + 1] = Math.max(lcs[i + 1][j], lcs[i][j + 1]);
        }
    }
}
console.log(lcs[n][m]);