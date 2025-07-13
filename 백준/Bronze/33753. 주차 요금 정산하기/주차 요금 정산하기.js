const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [A, B, C] = input[0].split(" ").map(Number);
const T = Number(input[1]);
let result = 0;
const diff = Math.max(T - 30, 0);
if(T > 0){
    result += A;
}

if(T >= 30){
    result += C * Math.ceil(diff / B);
}
console.log(result);