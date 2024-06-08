const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim().split(" "));
const [N, S] = input[0];
let count = 0;
let answer = "";
for(let i = 1; i <= +N; i++){
    const [id, a] = input[i];
    if(id === S){
        answer = a;
        break;
    }
}
for(let i = 1; i <= +N; i++){
    const [id, a] = input[i];
    if(id === S) break;
    if(answer === a) count++;
}
console.log(count);