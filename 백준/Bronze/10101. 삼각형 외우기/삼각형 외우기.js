const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const sum = a + b + c;
let result = '';
if(sum !== 180){
    result = "Error";
} else {
    if(a === b && a === c && b === c){
        result = "Equilateral";
    } else if(a !== b && a !== c && b !== c){
        result = "Scalene";
    } else{
        result = "Isosceles";
    }
}
console.log(result);