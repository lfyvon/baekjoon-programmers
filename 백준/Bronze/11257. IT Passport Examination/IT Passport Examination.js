const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0];
const result = [];
for(let i = 1; i <= N; i++){
    const [num, s, m, t] = input[i].split(" ").map(Number);
    const sum = s + m + t;
    let r = "FAIL";
    if(sum >= 55 && s >= 35 * 0.3 && m >= 25 * 0.3 && t >= 40 * 0.3){
        r = "PASS";
    }
    result.push(num + " " + sum + " " + r);
}
console.log(result.join("\n"));