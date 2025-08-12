const fs = require('fs');
const [N, K] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
let result = -1;
if(N === 1){
    result = `1 `.repeat(K).trim();
} else{
    if(N === 2 && K === 1){
        result = `1 2`;
    }   
}
console.log(result);