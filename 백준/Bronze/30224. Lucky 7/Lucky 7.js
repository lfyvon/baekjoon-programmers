const n = require('fs').readFileSync('/dev/stdin').toString().trim();
if(n.includes('7')){
    console.log(+n % 7 === 0 ? 3 : 2);
} else{
    console.log(+n % 7 === 0 ? 1 : 0);
}