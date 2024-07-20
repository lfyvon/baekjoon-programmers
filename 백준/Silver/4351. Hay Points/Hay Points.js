const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const [M, N] = input[0].split(" ").map(Number);
const dic = new Map();
let c = 0;
let idx = M + 1;
const result = [];
for(let i = 1; i <= M; i++){
    const [word, num] = input[i].split(" ");
    dic.set(word, Number(num));
}
while(c < N){
    let count = 0;
    while(input[idx] !== '.'){
        let str = input[idx].split(" ");
        for(let i = 0; i < str.length; i++){
            if(dic.has(str[i])) count += dic.get(str[i]);
        }
        idx++;
    }
    result.push(count);
    idx++;
    c++;
}
console.log(result.join("\n"));