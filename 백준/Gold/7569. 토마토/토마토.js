let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0]; 
const dz = [0, 0, 0, 0, -1, 1];
const [m, n, h] = input.shift().split(' ').map(el => parseInt(el));
const tBox = input.map(t => t.split(' ').map(el => parseInt(el)));
let box = Array.from(new Array(h), () => new Array());
const queue = [];
let ripeTomato = Array.from(new Array(h), () => Array.from(new Array(n), () => Array(m).fill(0)));
let result = '';

for(let i = 0; i < h; i++){
    let count = i * n;
    for(let j = count; j < n + count; j++){
        box[i].push(tBox[j]);
    }
}

for(let i = 0; i < h; i++){
    for(let j = 0; j < n; j++){
        for(let k = 0; k < m; k++){
            if(box[i][j][k] === 1) {
                queue.push([i, j, k]);
                ripeTomato[i][j][k] = 1;
            } else if(box[i][j][k] === 0){
                ripeTomato[i][j][k] = -1;
            }
        }
    }
}
let num = 0;
while(num < queue.length){
    const [z, x, y] = queue[num];

    for(let i = 0; i < 6; i++){
        const xPos = x + dx[i];
        const yPos = y + dy[i];
        const zPos = z + dz[i];
        if(xPos < 0 || yPos < 0 || zPos < 0 || xPos >= n || yPos >= m || zPos >= h) continue;
        if(ripeTomato[zPos][xPos][yPos] >= 0) continue;
        ripeTomato[zPos][xPos][yPos]  = ripeTomato[z][x][y] + 1;
        queue.push([zPos, xPos, yPos]);

    }
    num++;
}

let day = 0;
Loop1 :
for(let i = 0; i < h; i++){
    for(let j = 0; j < n; j ++){
        if(ripeTomato[i][j].includes(-1)){
            day = 0;
            break Loop1;
        }
        for(let k = 0; k < m; k++){
            day = Math.max(day, ripeTomato[i][j][k]);
        }
    }
}
result = day - 1;


console.log(result);