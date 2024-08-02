const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const seq = input[1].split(" ").map(Number);
const con = [];
const result = [];
while(true){
    if(!seq.reduce((a, b) => a + b, 0)){
        break;
    }
    for(let i = 0; i < N; i++){
        if(seq[i]){
            con.push(i);
            seq[i]--;
        }
    }
}
for(let i = 0; i < N; i++){
    result.push(con.lastIndexOf(i) + 1);
}
console.log(result.join(" "));