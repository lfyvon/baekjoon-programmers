const n = Number(require('fs').readFileSync('/dev/stdin').toString());
let result =  " ".repeat(n - 1) + "*\n";
for(let i = 1; i < n; i++){
    result += " ".repeat(n - i - 1) + "*" + " ".repeat(i * 2 - 1) + "*";
    if(i !== n - 1) result += "\n";
}
console.log(result);