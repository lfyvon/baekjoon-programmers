const fs = require('fs');
if (process.platform === "linux") {
  input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
} else {
  input = fs.readFileSync('./test.txt').toString().trim().split("\n");
}
const T = Number(input[0]);
let idx = 0;
let i = 1;
const result = [];

while(idx < T){
    const N = Number(input[i++]);
    let cSum = gSum = 0;
    for(let j = i; j < i + N; j++){
        const [C, G] = input[j].split(" ").map(Number);
        cSum += C;
        gSum += C * G;
    }

    result.push(`${cSum} ${(gSum / cSum).toFixed(1)}`);
    i += N;
    idx++;
}
console.log(result.join("\n"));