let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let count = 0;
while(input.length > 1){
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        sum += +input[i];
    }
    input = sum.toString();
    count++;
}
console.log(count);
console.log(input % 3 ? "NO" : "YES");