const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const T = Number(input[0]);
let i = 1;
let idx = 0;
const result = [];
while(idx < T){
    const n = Number(input[i++]);
    const count = [0, 0];
    for(let j = i; j < i + n; j++){
        const [p1, p2] = input[j].trim().split(" ");
        if(p1 === p2){}
        else if(p1 === 'R' && p2 === 'S'){
            count[0]++;
        } else if(p1 === 'S' && p2 === 'P'){
            count[0]++;
        } else if(p1 === 'P' && p2 === 'R'){
            count[0]++;
        } else {
            count[1]++;
        }
    }
    i += n;
    idx++;
    result.push(count[0] > count[1] ? "Player 1" : count[0] < count[1] ? "Player 2" : "TIE");
}
console.log(result.join("\n"));
