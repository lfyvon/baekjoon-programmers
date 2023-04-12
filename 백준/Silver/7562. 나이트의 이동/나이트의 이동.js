const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
const dx = [2, 2, -2, -2, 1, 1, -1, -1];
const dy = [1, -1, 1, -1, 2, -2, 2, -2];
let l = 0;
const result = [];
const bfs = (cur, [tx, ty]) => {
    const check = [...Array(l)].map(() => Array(l).fill(0));
    const queue = [cur];
    while(queue.length){
        let [x, y, count] = queue.shift();
        if(x === tx && y === ty){
            return count;
        }
        for(let i = 0; i < 8; i++){
            const posX = x + dx[i];
            const posY = y + dy[i];
            if(posX < 0 || posY < 0 || posX >= l || posY >= l || check[posX][posY]) continue;
            check[posX][posY] = 1;
            queue.push([posX, posY, count + 1]);
        }
    }
}

for(let i = 1; i <= t * 3; i += 3){
    l = Number(input[i]);
    const cur = input[i + 1].split(' ').map(Number);
    const next = input[i + 2].split(' ').map(Number);
    let count = 0;
    result.push(bfs([...cur, count], next));
}

console.log(result.join('\n'));