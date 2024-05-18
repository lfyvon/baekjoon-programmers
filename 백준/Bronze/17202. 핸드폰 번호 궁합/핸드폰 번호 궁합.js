let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split("").map(Number));
let AB = [];
for(let i = 0; i < 8; i++){
    AB.push(A[i]);
    AB.push(B[i]);
}
while(AB.length > 2){
    let tempAB = [];
    for(let i = 0; i < AB.length - 1; i++){
        tempAB.push((AB[i] + AB[i + 1]) % 10);
    }
    AB = tempAB.slice();
}
console.log(AB.join(""))