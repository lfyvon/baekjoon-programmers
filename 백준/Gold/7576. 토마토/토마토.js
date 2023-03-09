let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1]; 
const [m, n] = input.shift().split(' ').map(el => parseInt(el));
const box = input.map(t => t.split(' ').map(el => parseInt(el)));
const queue = [];
let ripeTomato = Array.from(new Array(n), () => Array(m).fill(0));
let result = '';

for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(box[i][j] === 1) {
            queue.push([i, j]);
            ripeTomato[i][j] = 1;
        } else if(box[i][j] === 0){
            ripeTomato[i][j] = -1;
        }
    }
}

let num = 0;
while(num < queue.length){
    const [x, y] = queue[num];

    for(let i = 0; i < 4; i++){
        const xPos = x + dx[i];
        const yPos = y + dy[i];
    
        if(xPos < 0 || yPos < 0 || xPos >= n || yPos >= m) continue;
        if(ripeTomato[xPos][yPos] >= 0) continue;
        ripeTomato[xPos][yPos]  = ripeTomato[x][y] + 1;
        queue.push([xPos, yPos]);

    }
    num++;
}

let day = 0;
for(let i = 0; i < n; i++){
    if(ripeTomato[i].includes(-1)){
        day = 0;
        break;
    }
    for(let j = 0; j < m; j++){
        day = Math.max(day, ripeTomato[i][j]);
    }
}
result = day - 1;

console.log(result);