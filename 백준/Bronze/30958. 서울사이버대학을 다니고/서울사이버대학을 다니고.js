const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");

const N = input[0];
const str = input[1];
const map = new Map();

for(let i = 0; i < N; i++){
    if(str[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) continue;

    if(map.has(str[i])){
        map.set(str[i], map.get(str[i]) + 1);
    } else{
        map.set(str[i], 1);
    }
}
console.log([...map].sort((a, b) => b[1] - a[1])[0][1]);
