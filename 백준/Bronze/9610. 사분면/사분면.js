const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let count = new Array(5).fill(0);
let result = [];
for(let i = 1; i <= N; i++){
    const [x, y] = input[i].split(" ").map(Number);
    if(x > 0 && y > 0) count[1]++;
    else if(x < 0 && y > 0) count[2]++;
    else if(x < 0 && y < 0) count[3]++;
    else if(x > 0 && y < 0) count[4]++;
    else count[0]++;
}
for(let i = 1; i < 5; i++){
    result.push(`Q${i}: ${count[i]}`);

}
result.push(`AXIS: ${count[0]}`);
console.log(result.join("\n"));
