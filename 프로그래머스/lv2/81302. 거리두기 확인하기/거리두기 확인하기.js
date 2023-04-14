function solution(places) {
    var answer = [];
    places.forEach((place) => {
        let check = 1;
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(place[i][j] === 'P' && !bfs([i, j, 0], place)){
                    check = 0;
                    break;
                }
            }
            if(!check) break;
        }
        answer.push(check);
    });
    return answer;
}

const bfs = (start, place) => {
    const visited = Array.from({length:5}, () => Array.from({length: 5}), () => 0);
    const queue = [start];
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    while(queue.length){
        const [x, y, depth] = queue.shift();
        if(!visited[x][y]){
            visited[x][y] = 1;
            if(depth && place[x][y] === 'P') return false;
            for(let i = 0; i < 4; i++){
                const [posX, posY] = [x + dx[i], y + dy[i]];
                if(posX < 0 || posY < 0 || posX >= 5 || posY >= 5) continue;
                if(depth >= 2 || place[posX][posY] === 'X') continue;
                queue.push([posX, posY, depth + 1]);
            }
        }
    }
    return true;
}

