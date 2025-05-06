const fs = require('fs');
const [a, b, c] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);

if(a + b === c){
    console.log(`${a}+${b}=${c}`);
} else if(a - b === c){
    console.log(`${a}-${b}=${c}`);
} else if(a * b === c){
    console.log(`${a}*${b}=${c}`);
} else if(a / b === c){
    console.log(`${a}/${b}=${c}`);
} else if(a === b + c){
    console.log(`${a}=${b}+${c}`);
} else if(a === b - c){
    console.log(`${a}=${b}-${c}`);
} else if(a === b * c){
    console.log(`${a}=${b}*${c}`);
} else if(a === b / c){
    console.log(`${a}=${b}/${c}`);
}