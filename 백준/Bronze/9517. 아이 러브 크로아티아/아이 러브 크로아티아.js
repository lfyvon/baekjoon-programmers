const fs = require('fs');
input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");

let K = Number(input[0]);
const N = Number(input[1]);
let time = 210;
for(let i = 2; i <= N + 1; i++){
    const [T, Z] = input[i].trim().split(" ");
    time -= +T;
    if(time <= 0) break;
    if(Z === "T"){
        K = K % 8 + 1;
    }
}

console.log(K);