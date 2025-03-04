const fs = require('fs');
if (process.platform === "linux") {
  input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
} else {
  input = fs.readFileSync('./test.txt').toString().trim().split("\n");
}
const N = Number(input[0]);
const S = input[1].trim();
const uospc = {
    u : 0,
    o : 0,
    s : 0,
    p : 0,
    c : 0
}
for(let i = 0; i < N; i++){
    if(uospc[S[i]] >= 0) uospc[S[i]]++;
}
const result = Object.keys(uospc).map(el => uospc[el]);
console.log(Math.min(...result));