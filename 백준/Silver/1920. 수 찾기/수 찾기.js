let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let a = input[1].trim().split(' ').map(v => +v).sort(function (a, b) {
    return a - b;
});
let b = input[3].trim().split(' ').map(v => +v);
let result = [];

b.forEach(el =>{
    let check = 0;    
    let low = 0;
    let high = n - 1;
    while(low <= high){
        let mid = parseInt((low + high) / 2);
        if(el === a[mid]){
            check = 1;
            break;
        }
        if(el < a[mid]){
            high = mid - 1;
        } else if(el > a[mid]){
            low = mid + 1;
        }
    }
    result.push(check);
})
console.log(result.join('\n'));