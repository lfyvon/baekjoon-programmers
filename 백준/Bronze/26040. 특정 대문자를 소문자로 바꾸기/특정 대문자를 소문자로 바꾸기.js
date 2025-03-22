const fs = require('fs');
let [A, B] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n").map(el => el.trim());
A = A.split("");
B = B.split(" ");
for(let i = 0; i < A.length; i++){
    for(let j = 0; j < B.length; j++){
        if(A[i] === B[j]) A[i] = A[i].toLowerCase();
    }
}
console.log(A.join(""));