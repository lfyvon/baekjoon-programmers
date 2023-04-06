const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
const bus = input.slice(2).map(el => el.split(" ").map(Number));
const dist = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

for(let i = 0; i < m; i++){
    dist[bus[i][0]][bus[i][1]] = Math.min([bus[i][2]], dist[bus[i][0]][bus[i][1]]);
}

for(let k = 1; k <= n; k++){
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            if(dist[i][k] + dist[k][j] < dist[i][j] && i !== j){
                dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
}

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
        if(dist[i][j] === Infinity) dist[i][j] = 0;
    }
}

console.log(dist.slice(1).map(el => el.slice(1).join(' ')).join('\n'));