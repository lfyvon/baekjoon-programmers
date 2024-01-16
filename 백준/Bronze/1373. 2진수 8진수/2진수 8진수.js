let bin = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = "";
while(bin.length >= 3){
    result = parseInt(bin.slice(bin.length - 3), 2).toString(8) + result;
    bin = bin.slice(0, bin.length - 3);
}
console.log((bin ? parseInt(bin, 2).toString(8) : "") + result);