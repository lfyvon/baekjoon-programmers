const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];

let gcd = (a, b) => {
    while(b > 0){
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  }

for(let i = 1; i <= T; i++){
    let [n, ...arr] = input[i].split(" ").map(Number);
    arr = arr.sort((a, b) => b - a);
    let sum = 0;
    for(let j = 0; j < n - 1; j++){
        const a = arr[j];
        for(let k = j + 1; k < n; k++){
            const b = arr[k];
            sum += gcd(a, b);
        }
    }
    result.push(sum);
}

console.log(result.join("\n"));