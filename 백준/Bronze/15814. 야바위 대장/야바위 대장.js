const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const S = input[0].trim().split("");
const T = Number(input[1]);

for(let i = 2; i <= T + 1; i++){
    const [A, B] = input[i].split(" ").map(Number);
    [S[A], S[B]] = [S[B], S[A]];
}
console.log(S.join(""));