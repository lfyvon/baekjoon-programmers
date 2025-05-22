const fs = require('fs');
const [N, S] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(Number);
const result = [];

if(N < 6){
    let start = Number(!S);
    for(let i = 2; i <= N; i++){
        result.push(start);
        start = Number(!start);
    }
}
console.log(result.length > 0 ? result.join("\n") : "Love is open door");