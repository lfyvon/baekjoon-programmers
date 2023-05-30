const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = "";
for(let i = 1; i <= n; i++){
    if(i === 1){
        result += " ".repeat(n - i) + "*" + "\n";
    } else if(i === n){
        result += "*".repeat(i * 2 - 1);       
    } else{
        result += " ".repeat(n - i) + "*" + " ".repeat((i - 1) * 2 - 1) + "*"  + "\n";
    }
}
console.log(result);