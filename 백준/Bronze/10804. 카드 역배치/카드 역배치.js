const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = new Array(21).fill(0).map((v, i) => i);
for(let i = 0; i < 10; i++){
    let [a, b] = input[i].split(" ").map(Number);
    while(a < b){
        let temp = arr[a];
        arr[a++] = arr[b];
        arr[b--] = temp;
    }
}
arr.shift();
console.log(arr.join(" "));