const n = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log((8n ** n).toString());