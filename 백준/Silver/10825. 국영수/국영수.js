const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const list = input.slice(1).map(el => el.trim().split(" ")).sort((a, b) => {
    if(+a[1] === +b[1]){
        if(+a[2] === +b[2]){
            if(+a[3] === +b[3]){
                if (a[0] > b[0]) return 1;
                else if (a[0] < b[0]) return -1;
                else return 0;
            }
            return +b[3] - +a[3];
        }
        return +a[2] - +b[2];
    }
    return +b[1] - +a[1];
}).map(el => el[0]);
console.log(list.join("\n"));