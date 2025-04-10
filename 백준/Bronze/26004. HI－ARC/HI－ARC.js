const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const str = input[1];
const map = new Map([
    ['H', 0],
    ['I', 0],
    ['A', 0],
    ['R', 0],
    ['C', 0]
]);

for(let i = 0; i < N; i++){
    if(map.has(str[i])){
        map.set(str[i], map.get(str[i]) + 1);
    }
}

console.log(Math.min(...map.values()))
