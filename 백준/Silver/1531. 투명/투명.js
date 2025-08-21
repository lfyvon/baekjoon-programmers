const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const SIZE = 101;
const pic =  Array.from(Array(SIZE), () => new Array(SIZE).fill(0));
let count = 0;

for(let i = 1; i <= N; i++){
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    for(let j = x1; j <= x2; j++){
        for(let k = y1; k <= y2; k++){
            pic[j][k] += 1;
        }
    }
}

for(let i = 1; i < SIZE; i++){
    for(let j = 1; j < SIZE; j++){
        if(pic[i][j] > M) count++;
    }
}

console.log(count);