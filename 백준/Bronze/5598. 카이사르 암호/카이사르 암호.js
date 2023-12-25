const str = require('fs').readFileSync('/dev/stdin').toString().trim();
const len = str.length;
const arr = new Array(len);
for(let i = 0; i < len; i++){
    arr[i] = String.fromCharCode(str.charCodeAt(i) - 3) < 'A' ? String.fromCharCode(str.charCodeAt(i) + 23) : String.fromCharCode(str.charCodeAt(i) - 3);
}
console.log(arr.join(""));