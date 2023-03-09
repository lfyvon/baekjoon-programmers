let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const place = Number(input);
let count = 1;
let sum = 1;
while(sum < place){
    sum += 6 * count;
    count++;
}

console.log(count);