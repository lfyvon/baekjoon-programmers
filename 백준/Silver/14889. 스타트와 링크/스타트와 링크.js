const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const half = N / 2;
const board = input.slice(1).map(el => el.split(" ").map(Number));
let min = Infinity;
const visited = new Array(N).fill(0);
const dfs = (count, k) => {
    if(count === half){
        const sTeam = [];
        const lTeam = [];
        let sSum = 0;
        let lSum = 0;
        for (let i = 0; i < N; i++) {
            if (visited[i]) sTeam.push(i);
            else lTeam.push(i);
        }
        for (let i = 0; i < half; i++) {
            for (let j = i + 1; j < half; j++) {
              sSum += board[sTeam[i]][sTeam[j]] + board[sTeam[j]][sTeam[i]];
              lSum += board[lTeam[i]][lTeam[j]] + board[lTeam[j]][lTeam[i]];
            }
        }
          min = Math.min(min, Math.abs(sSum - lSum));
          return;
    }
    for (let i = k; i < N; i++) {
        visited[i] = 1;
        dfs(count + 1, i + 1);
        visited[i] = 0;
    }
}
dfs(0, 0);
console.log(min);