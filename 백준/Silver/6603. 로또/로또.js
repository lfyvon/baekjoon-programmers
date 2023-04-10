const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = "";
let k = "";
let s = "";
const dfs = (count, select) => {
    if(select.length === 6){
        answer += `${select.join(" ")}\n`;;
    } else{
        for(let i = count; i < k; i++){
            dfs(i + 1, [...select, s[i]]);
        }
    }
}
let i = 0;
while(input[i] !== '0'){
    [k, ...s] = input[i++].split(' ').map(Number);
    dfs(0, []);
    answer += "\n";
}

console.log(answer.trim());