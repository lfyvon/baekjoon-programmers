const fs = require('fs');
const S = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim();
const one = 'AabDdegOoPpQqR@';
const two = 'B';
let count = 0;

for(let i = 0; i < S.length; i++){
    if(one.indexOf(S[i]) >= 0) count++;
    if(two.indexOf(S[i]) >= 0) count += 2;
}
console.log(count);