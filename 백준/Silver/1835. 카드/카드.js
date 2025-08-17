const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
const result = [N];
for(let i = N - 1; i > 0; i--){
    result.unshift(i);

    for(let j = 0; j < i; j++){
        const popCard = result.pop();
        result.unshift(popCard);
    }
}
console.log(result.join(" "));