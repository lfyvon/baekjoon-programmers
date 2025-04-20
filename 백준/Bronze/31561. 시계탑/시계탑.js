const fs = require('fs');
const M = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());

if(M <= 30){
    console.log((M / 2).toFixed(1));
} else{
    console.log(((M - 30) * 1.5 + 15).toFixed(1));
}