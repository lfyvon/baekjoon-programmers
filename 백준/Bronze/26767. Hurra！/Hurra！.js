const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const result = [];
for(let i = 1; i <= N; i++){
    if(i % 7 === 0 && i % 11 === 0){
        result.push("Wiwat!");
    } else if(i % 7 === 0){
        result.push("Hurra!");
    } else if(i % 11 === 0){
        result.push("Super!");
    } else{
        result.push(i);
    }
}
console.log(result.join("\n"));