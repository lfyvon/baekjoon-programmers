const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [n, d] = input[0].split(" ").map(Number);
const alpa = ['d', 'q', 'b', 'p'];
const arr1 = ['q', 'd', 'p', 'b'];
const arr2 = ['b', 'p', 'd', 'q'];
const result = [];
for(let i = 1; i <= n; i++){
    let str = input[i].trim().split("");
    result.push(str.map(el => d === 1 ? arr1[alpa.indexOf(el)] : arr2[alpa.indexOf(el)]).join(""));
}
console.log(result.join("\n"))