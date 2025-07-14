const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const dna = {
    "AA": "A", "AG": "C", "AC": "A", "AT": "G", 
    "GA": "C", "GG": "G", "GC": "T", "GT": "A", 
    "CA": "A", "CG": "T", "CC": "C", "CT": "G",
    "TA": "G", "TG": "A", "TC": "G", "TT": "T"
};
const N = Number(input[0]);
let str = input[1];
let result = str[str.length - 1];

for (let i = str.length - 2; i >= 0; i--) {
    result = dna[str[i] + result];
}
console.log(result);