const N = parseInt(require('fs').readFileSync('/dev/stdin').toString());
if(N % 2 == 0) console.log("SK");
else console.log("CY");