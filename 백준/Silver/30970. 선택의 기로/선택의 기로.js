const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(Number));
const result = [];

const first = [...arr].sort((a, b) => {
    if(a[0] === b[0]){
        return a[1] - b[1];
    } 
    return b[0] - a[0];
});


const second = [...arr].sort((a, b) => {
    if(a[1] === b[1]){
        return b[0] - a[0];
    } 
    return a[1] - b[1];
});

console.log(`${first[0].join(" ")} ${first[1].join(" ")}`);
console.log(`${second[0].join(" ")} ${second[1].join(" ")}`);