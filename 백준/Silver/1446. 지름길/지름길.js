const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));

const [N, D] = input[0];
const dist = new Array(D + 1).fill(Infinity);
const graph = Array.from(Array(D + 1), () => []);

for(let i = 1; i <= N; i++){
    const [s, e, w] = input[i];
    if(e <= D && e - s > w){
        graph[s].push([e, w]);
    }
}

dist[0] = 0;
for (let i = 0; i <= D; i++) {
    if(i > 0){
        dist[i] = Math.min(dist[i], dist[i - 1] + 1);
    }
    for (let [next, cost] of graph[i]) {
        if (dist[next] > dist[i] + cost) {
            dist[next] = dist[i] + cost;
    }
  }
}

console.log(dist[D]);