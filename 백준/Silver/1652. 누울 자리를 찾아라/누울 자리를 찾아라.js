const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
let row = 0;
let col = 0;
for(let i = 0; i < n; i++){
    const rowArr = input[i].trim().split("X");
    row += rowArr.filter(el => el.length >= 2).length;
}

for(let i = 0; i < n; i++){
    let count = 0;
    for(let j = 0; j < n; j++){
        if(input[j][i] !== "X") count++;
        if(input[j][i] === "X" || j === n - 1){
            if(count >= 2) col++;
            count = 0;
        }
    }
}

console.log(`${row} ${col}`);