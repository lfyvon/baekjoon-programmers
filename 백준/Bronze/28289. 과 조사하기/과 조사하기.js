const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const P = Number(input[0]);
const result = new Array(4).fill(0);

for(let i = 1; i <= P; i++){
    const [G, C, P] = input[i].split(" ").map(Number);
    if(G === 1){
        result[3]++;
    } else {
        if(C <= 2){
            result[0]++;
        } else{
            result[C - 2]++;
        }
    }
}
console.log(result.join("\n"));