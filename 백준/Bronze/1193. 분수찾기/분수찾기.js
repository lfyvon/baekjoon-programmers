let x = parseInt(require('fs').readFileSync('/dev/stdin').toString());

let c = 0;
let n = 0;
let d = 0;
while(true){
    if(x > c){
        x -= c;
        c++;
    } else break;
}

if(c % 2 == 0){
    n = x;
    d = c + 1 - n;
} else{
    d = x;
    n = c + 1 - x;
}

console.log(n + "/"+ d);