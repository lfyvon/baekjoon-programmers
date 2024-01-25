const [p, q] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = "";
if(p <= 50 && q <= 10){
    result = "White";
} else if(q > 30){
    result = "Red";
} else{
    result = "Yellow";
}
console.log(result);