const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const list = input.slice(1).map(el => el.trim().split(" "));
let result = [0, 0];

for(let i = 0; i < N; i++){
    if(list[i][0] === 'jinju'){
        result[0] = +list[i][1];
        break;
    }
}

for(let i = 0; i < N; i++){
    if(list[i][1] > result[0]){
        result[1]++;
    }
}

console.log(result.join("\n"));
