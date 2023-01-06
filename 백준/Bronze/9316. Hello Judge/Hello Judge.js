const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = "";
for(let i = 1; i <= N; i++){
    result += "Hello World, Judge " + i + "!\n";
}
console.log(result.trim());