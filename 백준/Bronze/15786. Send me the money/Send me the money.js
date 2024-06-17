const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const [N, M] = input[0].split(' ').map(Number);
const S = input[1];
const result = [];
for(let i = 2; i < 2 + M; i++){
    let idx = 0;
    const post = input[i];
    for(let j = 0; j < post.length; j++){
        if(S[idx] === post[j]){
            idx++;
        }
        if(idx === S.length) break;
    }
    result.push(idx === S.length);
}
console.log(result.join("\n"));