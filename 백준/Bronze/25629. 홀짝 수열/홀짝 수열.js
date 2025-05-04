const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);
const odd = [];
const even = [];

for(let i = 0; i < N; i++){
    if(arr[i] % 2 === 1) odd.push(arr[i]);
    else even.push(arr[i]);
}
console.log(Number(odd.length === even.length || odd.length === even.length + 1));