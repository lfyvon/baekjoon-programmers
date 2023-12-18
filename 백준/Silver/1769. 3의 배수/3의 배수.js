let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let count = 0;
while(input.length > 1){
    input = input.split("").map(Number).reduce((a, b) => a + b, 0).toString();
    count++;
}
console.log(count);
console.log(+input % 3 ? "NO" : "YES");