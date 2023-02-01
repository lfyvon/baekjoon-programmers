const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const city = input.slice(1).map(el => el.split(' ').map(Number));
const house = [];
const chicken = [];
let result = Infinity;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(city[i][j] === 1) house.push([i, j]);
        if(city[i][j] === 2) chicken.push([i, j]);
    }
}

const check = Array.from(chicken.length).fill(0);

const minDistance = () => {
    let sum = 0;
    for(let i = 0; i < house.length; i++){
        const [r1, c1] = house[i];
        let min = Infinity;
        for(let j = 0; j < chicken.length; j++){
            if(check[j]){
                const [r2, c2] = chicken[j];
                min = Math.min(min, Math.abs(r1 - r2) + Math.abs(c1 - c2));
            }
        }
        sum += min;
    }
    return sum
}

const dfs = (index, count) => {
    if(count === m){
        result = Math.min(result, minDistance());
    } else{
        for(let i = index; i < chicken.length; i++){
            if(check[i]) continue;
            check[i] = 1;
            dfs(i, count + 1);
            check[i] = 0;
        }
    }
}

dfs(0, 0);
console.log(result);