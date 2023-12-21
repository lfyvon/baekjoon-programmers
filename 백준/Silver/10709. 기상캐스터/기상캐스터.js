const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [H, W] = input.shift().split(" ").map(Number);
const map = input.map(el => el.trim().split(""));
const visited = Array.from(Array(H), () => Array(W).fill(0));

for(let i = 0; i < H; i++){
    let count = -1;
    for(let j = 0; j < W; j++){
        if(map[i][j] === "c") count = 0;
        visited[i][j] = count;
        if(count !== -1) count++;
    }
}
console.log(visited.map(el => el.join(" ")).join("\n"));