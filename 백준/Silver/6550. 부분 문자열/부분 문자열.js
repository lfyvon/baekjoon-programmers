const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.length;
let result = [];
for(let i = 0; i < N; i++){
    const [s, t] = input[i].trim().split(" ");
    let count = 0;
    for(let j = 0; j < t.length; j++){
        if(t[j] === s[count]){
            count++;
        }
    }
    result.push(count === s.length ? "Yes" : "No");
}
console.log(result.join("\n"));