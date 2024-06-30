const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(Number);
const ch = input.slice(1, N + 1).map(el => el.trim());
const ch2 = input.slice(N + 1, 2 * N + 1).map(el => el.trim());
let check = true;
for(let i = 0; i < N; i++){
    let str = "";
    for(let j = 0; j < M; j++){
        str += ch[i][j].repeat(2);
    }
    if(str !== ch2[i]){
        check = false;
        break;
    }
}
console.log(check ? "Eyfa" : "Not Eyfa");