const [lv, str] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const score = {
    miss : 0,
    bad : 200,
    cool : 400,
    great : 600,
    perfect : 1000 
}
console.log(score[str] * +lv);