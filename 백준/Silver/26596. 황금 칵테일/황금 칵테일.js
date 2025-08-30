const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const M = Number(input[0]);
const map = new Map();
let result = false;

for(let i = 1; i <= M; i++){
    let [s, x] = input[i].split(" ");
    x = Number(x);
    
    if(map.has(s)){
        map.set(s, map.get(s) + x);
    } else {
        map.set(s, x);
    }
}

const arr = Array.from(map.values()).sort((a, b) => a - b);

for(let i = 0; i < M; i++){
    for(let j = i + 1; j < M; j++){
        if(Math.floor(arr[i] * 1.618) === arr[j]){
            result = true;
            break;
        }
    }
    if(result) break;
}
console.log(result ? "Delicious!" : "Not Delicious...");