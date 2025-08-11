const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [R, C] = input[0].split(" ").map(Number);
const arr = input.slice(1, R + 1).map(el => el.trim().split(" ").map(Number));
const T = Number(input[R + 1]);
let count = 0;

for(let i = 0; i < R - 2; i++){
    for(let j = 0; j < C - 2; j++){
        let num = [];
        for(let k = i; k <= i + 2; k++){
            for(let l = j; l <= j + 2; l++){
                num.push(arr[k][l]);
            }
        }
        num.sort((a, b) => a - b);
        if(T <= num[4]) count++;
    }
}
console.log(count);
