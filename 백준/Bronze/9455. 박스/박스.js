const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const T = input[0][0];
let c = 0;
let idx = 1;
let result = [];
while(c < T){
    const [m, n] = input[idx++];
    let sum = 0;
    for(let i = 0; i < n; i++){
        let count = 0;
        for(let j = idx; j < idx + m; j++){
            if(input[j][i]) count++;
            else if(!input[j][i]) sum += count;
        }
    }
    result.push(sum);
    idx += m;
    c++;
}
console.log(result.join("\n"));