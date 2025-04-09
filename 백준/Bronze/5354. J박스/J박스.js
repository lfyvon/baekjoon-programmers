const fs = require('fs');
const [T, ...input] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
const result = [];

for(let i = 0; i < T; i++){
    const N = input[i];
    let str = "";
    if(N > 2){
        str += "#".repeat(N) + "\n";
        str += `#${"J".repeat(N - 2)}#\n`.repeat(N - 2);
        str += "#".repeat(N) + "\n";
    } else {
        for(let j = 0; j < N; j++){
            str += "#".repeat(N) + "\n";
        }
    }
    result.push(str);
}
console.log(result.join("\n").trim());