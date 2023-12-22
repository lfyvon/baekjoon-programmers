const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const [N, ...op] = input[i].trim().split(" ");
    let cal = +N;
    for(let j = 0; j < op.length; j++){
        if(op[j] === "@") cal *= 3;
        if(op[j] === "%") cal += 5;
        if(op[j] === "#") cal -= 7;
    }
    result.push(cal.toFixed(2));
}
console.log(result.join("\n"));