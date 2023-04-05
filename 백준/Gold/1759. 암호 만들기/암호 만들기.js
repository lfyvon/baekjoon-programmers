const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [l, c] = input[0].split(' ').map(Number);
const letters = input[1].split(' ').sort();
const vowel = ['a', 'e', 'i', 'o', 'u'];
const result = [];

const dfs = (str, count) => {
    if(str.length === l){
        let vCount = 0;
        for(let i = 0; i < l; i++){
            for(let j = 0; j < 5; j++){
                if(str[i] === vowel[j]){
                    vCount++;
                    break;
                }
            }
        }
        if(vCount >= 1 && l - vCount >= 2) result.push(str);
    } else{
        for(let i = count; i < c; i++){
            dfs(str + letters[i], i + 1);
        }
    }
}
dfs("", 0)
console.log(result.join("\n"));