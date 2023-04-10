const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const dp = new Array(21);
for (let i = 0; i < 21; ++i) {
    dp[i] = new Array(21);
    for (let j = 0; j < 21; ++j) {
      dp[i][j] = new Array(21).fill(0);
    }
}

let i = 0;
const result = [];

const w = (a, b, c) => {
    if(a <= 0 || b <= 0 || c <= 0){
        return 1;
    }
    if(a > 20 || b > 20 || c > 20){
       return w(20, 20, 20);
    }

    if(dp[a][b][c]) return dp[a][b][c];

    if(a < b && b < c){
        return (dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c));
    }

    return (dp[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1));
}
while(input[i] !== "-1 -1 -1"){
    const [a, b, c] = input[i++].split(' ').map(Number);
    result.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}
console.log(result.join('\n'));