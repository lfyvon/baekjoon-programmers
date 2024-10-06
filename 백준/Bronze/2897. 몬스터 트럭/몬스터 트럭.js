const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const [R, C] = input[0].split(" ").map(Number);
const map = input.slice(1);
const count = new Array(5).fill(0);
for(let i = 0; i < R - 1; i++){
    for(let j = 0; j < C - 1; j++){
        let c = 0;
        if(map[i][j] === "#" || map[i + 1][j] === "#" || map[i][j + 1] === "#" || map[i + 1][j + 1] === "#"
        ) continue;
        if(map[i][j] === "X") c++;
        if(map[i + 1][j] === "X") c++;
        if(map[i][j + 1] === "X") c++;
        if(map[i + 1][j + 1] === "X") c++;
        count[c]++;
    }
}
console.log(count.join("\n"));