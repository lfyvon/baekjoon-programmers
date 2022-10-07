const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());

let binary = n.toString(2);
let result = parseInt(binary.slice(1), 2) * 2;

if(result === 0 || !result){
    result = n;
}
console.log(result);