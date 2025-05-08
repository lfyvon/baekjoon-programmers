const fs = require('fs');
const S = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("");
const str = "SciComLove".split("");
console.log(str.filter((el, i) => el !== S[i]).length);
