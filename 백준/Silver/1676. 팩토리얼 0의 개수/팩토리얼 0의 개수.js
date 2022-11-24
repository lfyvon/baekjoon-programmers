const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let n = input;
let result = 0;

while(n > 0){
    n = parseInt(n / 5);
    result += n;
}

console.log(result);