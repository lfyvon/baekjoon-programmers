const n = BigInt(require('fs').readFileSync('/dev/stdin').toString());
if(n % 2n === 1n) console.log("SK");
else console.log("CY");