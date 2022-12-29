const n = BigInt(require('fs').readFileSync('/dev/stdin').toString());
if(n % 7n === 2n || n % 7n === 0n) console.log("CY");
else console.log("SK");