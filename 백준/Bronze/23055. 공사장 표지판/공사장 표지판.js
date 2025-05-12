const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
const result = Array.from(Array(N), () => new Array(N).fill(" "));

for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        if(i === 0 || j === 0 || i === N - 1 || j === N - 1 || i === j || i + j === N - 1){
            result[i][j] = "*";
        }
    }
}
console.log(result.map(el => el.join("")).join("\n"));