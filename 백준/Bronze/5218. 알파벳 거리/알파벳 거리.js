const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    let str = "Distances: ";
    const [w1, w2] = input[i].trim().split(" ");
    for(let j = 0; j < w1.length; j++){
        let diff = w2[j].charCodeAt() - w1[j].charCodeAt();
        if(diff < 0) diff += 26
        str += diff + " ";
    }
    result.push(str.trim());
}
console.log(result.join("\n"));