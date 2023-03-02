const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(BigInt);
const n = input[0];
const map = new Map();
for(let i = 1; i <= n; i++){
    if(map.has(input[i])){
        map.set(input[i], map.get(input[i]) + 1);
    } else{
        map.set(input[i], 1);
    }
}
const result = [...map].sort((a, b) => {
    if (b[1] < a[1]) return -1;
    else if (b[1] > a[1]) return 1;
    else {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      else return 0;
    }
});
console.log(result[0][0].toString());