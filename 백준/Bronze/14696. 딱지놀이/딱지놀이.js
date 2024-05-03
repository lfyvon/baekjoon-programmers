const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]) * 2;
const result = [];
for(let i = 1; i <= N; i += 2){
    let [numA, ...A] = input[i].split(" ").map(Number);
    let [numB, ...B] = input[i + 1].split(" ").map(Number);
    A = A.sort((a, b) => b - a);
    B = B.sort((a, b) => b - a);
    let len = Math.min(numA, numB);
    let round = "D";
    for(let j = 0; j < len; j++){
        if(A[j] !== B[j]){
            round = A[j] > B[j] ? "A" : "B";
            break;
        }
    }
    if(round === "D" && numA !== numB) round = numA > numB ? "A" : "B";
    result.push(round);
}
console.log(result.join("\n"));