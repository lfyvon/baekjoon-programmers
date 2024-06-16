const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(BigInt));
const T = input[0][0];
let c = 0;
let i = 1;
let result = [];
while(c < T){
    const [m, n] = input[i].map(Number);
    const cols  = new Array(m).fill(0n);
    for(let j = 0; j < m; j++){
        let mul = 1n;
        for(let k = i + 1; k <= i + n; k++){
            mul *= input[k][j];
        }
        cols[j] = mul;
    }
    let max = cols[0];
    let maxIdx = 0;
    for(let i = 0; i < m; i++){
        if(max <= cols[i]){
            max = cols[i];
            maxIdx = i;
        }
    }
    result.push(maxIdx + 1);
    i += n + 1;
    c++;
}
console.log(result.join("\n"));