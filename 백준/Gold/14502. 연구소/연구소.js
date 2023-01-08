const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1).map(el => el.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let result = 0;

const countSafeZones = (arr) => {
    let count = 0;
    const queue = [];

    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(arr[i][j] === 2){
                queue.push([i, j]);
            }
        }
    }

    while(queue.length){
        const [x, y] = queue.shift();
        for(let i = 0; i < 4; i++){
            const posX = x + dx[i];
            const posY = y + dy[i];
            
            if(posX < 0 || posY < 0 || posX >= N || posY >= M) continue;
            if(arr[posX][posY]) continue;
            arr[posX][posY] = 2;
            queue.push([posX, posY]);
        }
    }

    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(arr[i][j] === 0){
                count++;
            }
        }
    }
    return count;
}

const dfs = (count) => {
    if(count === 3){
        let arr = Array.from(Array(N), () => Array(M));
        for(let i = 0; i < N; i++){
            for(let j = 0; j < M; j++){
                arr[i][j] = map[i][j];
            }
        }
        let c = countSafeZones(arr)
        result = result > c ? result : c;
        return;
    }

    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(!map[i][j]){
                map[i][j] = 1;
                dfs(count + 1);
                map[i][j] = 0;
            }
        }
    }
}

dfs(0)
console.log(result);