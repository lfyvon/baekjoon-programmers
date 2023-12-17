const [N, F] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
let startN = Math.floor(N / 100) * 100;
while(true){
    if(startN % F === 0){
        break;
    }
    startN++;
}
console.log(startN.toString().slice(-2));