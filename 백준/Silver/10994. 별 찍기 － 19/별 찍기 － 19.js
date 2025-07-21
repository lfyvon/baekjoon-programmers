const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
const result = Array.from(new Array(N * 4 - 3), () => new Array(N * 4 - 3).fill(" "));

const recur = (n, x, y) => {
    if(n === 1){
        result[y][x] = '*';
        return;
    } 

    let L = n * 4 - 3;

    for(let i = 0; i < L; i++){
        result[y][x + i] = '*';
        result[y + i][x] = '*';
        result[y + L - 1][x + i] = '*';
        result[y + i][x + L - 1] = '*';
    }
    recur(n - 1, x + 2, y + 2);
}

recur(N, 0, 0);
console.log(result.map(el => el.join("")).join("\n"));