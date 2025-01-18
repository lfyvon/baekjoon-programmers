const [b, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = "Nothing";
const fruits = ['Watermelon', 'Pomegranates', 'Nuts'];
for(let i = 0; i < 3; i++){
    if(b >= arr[i]){
        result = fruits[i];
        break;
    }
} 
console.log(result);