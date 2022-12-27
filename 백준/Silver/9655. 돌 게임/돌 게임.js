const N = parseInt(require('fs').readFileSync('/dev/stdin').toString());
if(N % 2 == 1) console.log("SK");
else console.log("CY");