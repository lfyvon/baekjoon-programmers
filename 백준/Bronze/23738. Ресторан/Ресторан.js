const fs = require('fs');
const str = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim();
const cyril = {B : "v", E : "ye", H : "n", P : "r", C : "s", Y : "u", X : "h"};
let result = "";

for(let i = 0; i < str.length; i++){
    result += cyril[str[i]] ?? str[i].toLowerCase();  
}
console.log(result);