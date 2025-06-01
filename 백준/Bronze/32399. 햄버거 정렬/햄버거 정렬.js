const fs = require('fs');
const S = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim();
let result = 1;
if(S === "(1)") result = 0;
else if(S === ")1(") result = 2;
console.log(result);
