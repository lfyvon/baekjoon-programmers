let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let line of input){
    let arr = line.split(' ').map(el => parseInt(el));

    if(arr[0] === 0) break;
    arr.sort((a, b) => {
        return a - b;
    });

    if(Math.hypot(arr[0], arr[1]) === arr[2]){
        console.log("right");
    } else{
        console.log("wrong");
    }
}