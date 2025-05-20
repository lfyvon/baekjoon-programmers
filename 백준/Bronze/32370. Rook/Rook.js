const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
const [x, y] = input[1].split(" ").map(Number);

let count = 0;

if(a > 0 && b > 0){
    count = 2;
} else if(a === 0 && x === 0 && y < b){
    count = 3;
} else if(b === 0 && y === 0 && x < a){
    count = 3;
} else{
    count = 1;
}

console.log(count);